import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

let transporter = null;

// Singleton transporter (performance ke liye)
function createTransporter() {
  if (transporter) return transporter;

  const config = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_PORT === '465', // 465 = SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
  };

  transporter = nodemailer.createTransport(config);

  // Health check (sirf console ke liye)
  transporter.verify((error) => {
    if (error) {
      console.error('SMTP Error:', error);
    } else {
      console.log('SMTP Server ready');
    }
  });

  return transporter;
}

// Optional: GET for browser test (http://localhost:3000/api/send-email)
export async function GET() {
  return NextResponse.json({ message: 'Use POST to send email' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, email, and message are required',
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation (optional)
    const phoneRegex = /^(\+92|0)?[3-9][0-9]{9}$/;
    if (phone && !phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // (Optional) rate limit – agar kv nahi use kar rahe to ye 4 lines remove kar do
    // const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    // const rateLimitKey = `rate_limit_${clientIP}`;
    // const rateLimitCount = parseInt((await kv?.get(rateLimitKey)) || '0', 10);
    // if (rateLimitCount >= 5) ...

    const transporterInstance = createTransporter();

    const adminEmail = await transporterInstance.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb; margin-top: 0;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #374151;">Name:</td>
                <td style="padding: 12px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #374151;">Phone:</td>
                <td style="padding: 12px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0 12px 0; font-weight: 600; color: #374151;">Message:</td>
                <td style="padding: 12px 0;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully!',
        debug:
          process.env.NODE_ENV === 'development' ? adminEmail : undefined,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API Error:', error);

    if (error.code === 'EAUTH') {
      return NextResponse.json(
        {
          success: false,
          error: 'Authentication failed. Check SMTP credentials.',
        },
        { status: 401 }
      );
    }

    if (error.code === 'ECONNECTION') {
      return NextResponse.json(
        { success: false, error: 'Cannot connect to SMTP server.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please try again later.',
        ...(process.env.NODE_ENV === 'development' && {
          debug: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
