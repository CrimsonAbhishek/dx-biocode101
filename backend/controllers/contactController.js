const pool = require("../config/db");
const { sendContactEmail } = require("../services/emailService");

async function submitContact(req, res) {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      message
    } = req.body;

    await pool.execute(
      `
      INSERT INTO contact_submissions
      (full_name, email, phone, company, message)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        fullName,
        email,
        phone,
        company,
        message
      ]
    );

    await sendContactEmail({
      fullName,
      email,
      phone,
      company,
      message
    });

    res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Submission failed"
    });
  }
}

module.exports = {
  submitContact
};