const Officer = require("../schemas/officerSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

module.exports.postOfficer = async(req, res) => {
  
  const { name, email, password } = req.body;

  const user = await Officer.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
};

// Login User
module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    // return next(new ErrorHander("Please Enter Email & Password", 400));
    res.status(404).json({
      success: false,
      message: "Logged In",
    });
  }

  const user = await Officer.findOne({ email }).select("+password");

  if (!user) {
    // return next(new ErrorHander("Invalid email or password", 401));
    res.status(404).json({
      success: false,
      message: "Logged In",
    });
  }

  // const isPasswordMatched = await user.comparePassword(password);

  if (user.password != password) {
    res.status(404).json({
      success: false,
      message: "false password",
    });
  }
  else {
    res.status(201).json({
      success: true,
      message: "Logged In",
    });
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

// module.exports.postOfficer = (req, res) => {
//   const { user } = req.body;
//   const userinfo = new Officer({ Officer });
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

module.exports.getOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Officer.findById({ _id: id });
    // console.log(users);
    res.status(201).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Officer.findByIdAndDelete(
     {_id: id}
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const body = req.body;
    
    const updateuser = await Officer.findByIdAndUpdate(
      { _id: id },
      req.body,
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