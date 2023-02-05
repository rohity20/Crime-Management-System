const User = require("../schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

module.exports.postUser = async(req, res) => {
  
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
};

// Login User
module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  // checking if user has given password and email both

  // if (!email || !password) {
  //   // return next(new ErrorHander("Please Enter Email & Password", 400));
  //   res.status(404).json({
  //     success: false,
  //     message: "Please Again Logged In",
  //   });
  // }

  // const user = await User.findOne({ email: email }).select("+password");
  const user = await User.findOne({ email: email });
  console.log(user);

  // if (!user) {
  //   // return next(new ErrorHander("Invalid email or password", 401));
  //   res.status(404).json({
  //     success: false,
  //     message: "Logged In",
      
      
  //   });
  // }

  // const isPasswordMatched = await user.comparePassword(password);

  if (user) {
    res.status(201).json({
      success: true,
      message: "Logged In",
    });
    
    // res.status(201).json(user);
  }
  else {
    res.status(404).json({
      success: false,
      message: "false password",
    });
    // res.status(404).json("error");
  }

  // sendToken(user, 200, res);

};

// Logout User
module.exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

// module.exports.postUser = (req, res) => {
//   const { user } = req.body;
//   const userinfo = new User({ user });
//   userinfo
//     .save()
//     .then(() => {
//     //   console.log(userinfo);
//       res.status(201).json({ message: "Succesful" });
//     })
//     .catch((err) => {
//       // console.log(err);
//       res.status(500).json({ error: "Failed" });
//     });
// };

module.exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById({ _id: _id });
    // console.log(clients);
    res.status(201).json(clients);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await User.findByIdAndDelete(
     {_id: id}
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await User.findByIdAndUpdate(
      { _id: id },
    
      {
        new: true,
      }
    );
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};