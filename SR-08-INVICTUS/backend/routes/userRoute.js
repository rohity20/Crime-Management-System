const express = require("express");
const { postUser, getUser, updateUser, deleteUser, loginUser, logout } = require("../controllers/userController");

const router = express.Router();

/* reviews */

router.post("/createuser", postUser);
router.post("/loginuser", loginUser);
router.get("/logoutuser", logout);

router.get("/getuser/:id", getUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
