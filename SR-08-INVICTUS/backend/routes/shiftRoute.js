const express = require("express");
const { postShift, getShift, updateShift, deleteShift } = require("../controllers/shiftController");

const router = express.Router();

/* reviews */

router.post("/createshift", postShift);
router.get("/getshift/:id", getShift);
router.patch("/updateshift/:id", updateShift);
router.delete("/deleteshift/:id", deleteShift);

module.exports = router;