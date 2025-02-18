const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findById(req.user.id).select("-password");
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        message:"success",
        user: {
          id: user._id,
          username: user.name,
          email: user.email,
        },
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser };