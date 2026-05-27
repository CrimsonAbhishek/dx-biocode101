const { body, validationResult } = require("express-validator");

const contactValidationRules = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number required"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message required")
];

function validate(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  next();
}

module.exports = {
  contactValidationRules,
  validate
};