const Event = require('../schemas/eventSchema');

module.exports.postEvent = (req, res) => {
  const { event } = req.body;
  const userinfo = new Event({ event });
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

module.exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Event.findById({ _id: _id });
    // console.log(clients);
    res.status(201).json(clients);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Event.findByIdAndDelete(
     {_id: id}
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await Event.findByIdAndUpdate(
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