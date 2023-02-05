const shift = require("../schemas/shiftSchema");

module.exports.postShift = (req, res) => {
  const { shift } = req.body;
  const userinfo = new shift({ shift });
  userinfo
    .save()
    .then(() => {
    //   console.log(userinfo);
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({ error: "Failed" });
    });
};

module.exports.getShift = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await shift.findById({ _id: _id });
    // console.log(clients);
    res.status(201).json(clients);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteShift = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await shift.findByIdAndDelete(
     {_id: id}
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateShift = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await shift.findByIdAndUpdate(
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