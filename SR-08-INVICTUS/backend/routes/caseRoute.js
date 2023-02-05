const express = require("express");
const { updateCase, deleteCase, postCase, getCase, allotOfficer } = require("../controllers/caseController");

const router = express.Router();

/* reviews */

router.post("/createcase", postCase);
router.get("/getcase", getCase);
router.patch("/updatecase/:id", updateCase);
router.delete("/deletecase/:id", deleteCase);

router.patch("/allotofficer", allotOfficer);
module.exports = router;