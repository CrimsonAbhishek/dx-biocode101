const express = require("express");

const {
  submitContact
} = require("../controllers/contactController");

const {
  contactValidationRules,
  validate
} = require("../middleware/validateContact");

const router = express.Router();

router.post(
  "/submit",
  contactValidationRules,
  validate,
  submitContact
);

module.exports = router;