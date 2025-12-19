import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('ENV MISSING:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
      });
      return NextResponse.json(
        { success: false, message: 'Email config missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',               // SIMPLE, tested pattern
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Debug: SMTP test
    await transporter.verify();

    await transporter.sendMail({
      from: `"Signup Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Signup: ${name}`,
      html: `
        <h2>New Signup / Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: '✅ Signup submitted & email sent successfully!',
    });
  } catch (error) {
    console.error('EMAIL ERROR FULL:', error);   // IMPORTANT
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Try again later.' },
      { status: 500 }
    );
  }
}
