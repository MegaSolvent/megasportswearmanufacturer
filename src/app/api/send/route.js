import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    // ✅ Safe JSON parsing
    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { name, email, phone, message,pageUrl } = body;

    if (!name || !email) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // ✅ MySQL Connection
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // ✅ Insert into DB
    await db.execute(
      "INSERT INTO contacts (name,email,phone,message) VALUES (?,?,?,?)",
      [name, email, phone, message]
    );

    // ✅ SMTP CONFIG (FIXED 🔥)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // ✅ required
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // ✅ FIX for your error
      },
    });

    // ✅ Send Email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL}>`,
      to: email,
      subject: "Sports Apparel Manufacturer",
      html: `
      <h3>🌐 Lead Source</h3>
    <p><b>Page URL:</b> ${pageUrl}</p>
        <p><b>Name:</b> ${name || "N/A"} </P>
         <p><b>Email:</b> ${email || "N/A"} </P>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    return Response.json({ success: true });





    
  } catch (error) {
    console.log("FULL ERROR:", error); // ✅ important for debug
    return Response.json({ error: error.message }, { status: 500 });
  }
}