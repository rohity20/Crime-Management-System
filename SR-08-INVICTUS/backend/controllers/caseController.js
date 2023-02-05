const Case = require("../schemas/caseSchema");

module.exports.postCase = (req, res) => {
  const { case1 } = req.body;
  const userinfo = new Case({ case1 });
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

module.exports.getCase = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Case.findById({ _id: id });
    // console.log(clients);
    res.status(201).json(clients);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteCase = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Case.findByIdAndDelete(
     {_id: id}
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateCase = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await Case.findByIdAndUpdate(
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

module.exports.allotOfficer = async (req, res) => {
  try {
    const { id, priority, officerId } = req.body;

    const updateuser = await Case.findByIdAndUpdate(
      { _id: id },
      { status: "alloted" },
      { priority: priority },
      // { alloted_officer: officerId },
      { $push: {alloted_officer: officerId}},
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