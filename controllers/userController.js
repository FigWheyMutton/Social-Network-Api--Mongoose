const { User, Thoughts } = require('../models');

module.exports = {
  getUsers(req,res) {
    User.find()
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req,res) {
    User.findOne({  _id: req.params.userId })
    .then((userData) =>
    !user
      ? res.status(404).json({ message: 'No user with this Id'})
      : res.json(userData)
      )
      .catch((err) => res.status(500).json(err))
  },
  createUser(req,res) {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res) {
    User.updateOne(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true}
    ).then((userData) => 
      !userData
        ?res.status(404).json({ message: 'No user to update with this Id' })
        : res.json(userData)
    ).catch((err) => {
    console.log(err);
    res.status(500).json(err)
    })
  },
  deleteUser(req,res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((userData) => 
      !userData 
        ? res.status(404).json({ message: 'No user with this Id'})
        : Thoughts.deleteMany({ _id: { $in: userData.thoughts} })
    )
    .then(() => res.json({ message: 'The user and associated Thoughts have been deleted' }))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  },
};