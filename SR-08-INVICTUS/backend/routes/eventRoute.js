const express = require("express");
const { postEvent, getEvent, updateEvent, deleteEvent } = require("../controllers/eventController");

const router = express.Router();

/* reviews */

router.post("/createevent", postEvent);
router.get("/getevent/:id", getEvent);
router.patch("/updateevent/:id", updateEvent);
router.delete("/deleteevent/:id", deleteEvent);

module.exports = router;