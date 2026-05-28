const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendContactEmail(data) {
  const html = `
    <h2>New DX BIOCODE Inquiry</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;

  await transporter.sendMail({
    from: `"DX BIOCODE Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL || "crimsonabhishek@gmail.com",
    subject: "New Website Inquiry - DX BIOCODE",
    html
  });
}

module.exports = { sendContactEmail };