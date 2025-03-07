const express = require("express");
const { getUser } = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();
router.get("/profile", verifyToken, getUser);
module.exports = router;
