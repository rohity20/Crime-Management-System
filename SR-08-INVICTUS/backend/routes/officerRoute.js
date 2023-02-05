const express = require("express");
const { postOfficer, getOfficer, updateOfficer, deleteOfficer, loginUser, logout } = require("../controllers/officerController");

const router = express.Router();

/* reviews */

router.post("/createofficer", postOfficer);
router.post("/loginofficer", loginUser);
router.get("/logoutofficer", logout);

router.get("/getofficer/:id", getOfficer);
router.patch("/updateofficer/:id", updateOfficer);
router.delete("/deleteofficer/:id", deleteOfficer);

module.exports = router;