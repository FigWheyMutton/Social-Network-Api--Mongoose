const { User, Thought, } = require('../models');
const reactionSchema = require('../models/Reaction');

module.exports = {
  getThoughts(req,res) {
    Thought.find()
    .then((allThoughts) => res.json(allThoughts))
    .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req,res) {
    Thought.findOne({ _id: req.params.thoughtsId })
    .then((thoughtDb) => 
        !thoughtDb
            ? res.status(404).json({ message: 'No Thoughts found with this Id'})
            : res.json(thoughtDb)
    )
    .catch((err) => {
        res.status(500).json(err)
    })
  },
  createThoughts(req,res) {
    console.log(req.body)
    Thought.create(req.body)
    .then((thoughtDb) => {
        return User.findOneAndUpdate(
            { _id: req.body._id },
            {$addToSet: { thoughts: thoughtDb._id }},
            { new: true }
        );
    }).then((user) => 
    !user 
        ?res.status(404).json({ message: 'Application was created successfully but no users were found.' })
        : res.json({ message: 'Application with users created successfully'})
    ).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
  },
  updateThought(req,res) {
    Thought.findOneAndUpdate( 
        { _id: req.params.thoughtsId},
        { $set: req.body },
        { runValidators: true, new: true },
    ).then((thoughtDb) => 
    !thoughtDb
        ? res.status(404).json({ message: 'There was no thought with this Id found'})
        : res.json(thoughtDb)
    ).catch((err)=> {
        res.status(500).json(err);
    });
  },
  deleteThought(req,res) {
    Thought.findOneAndDelete(
        { _id: req.body.thoughtsId},
    ).then((thought) =>
    !thought   
        ? res.status(404).json({ message: 'Thought was deleted'})
        : User.findOneAndUpdate(
            { thoughts: req.params.thoughtsId },
            { $pull: { thoughts: req.params.thoughtsId}},
            { new: true }
    )).then((user)=>
        !user
            ?res.status(404).json({ message: 'Thoughts successfully created but no users were found'})
            : res.json({ message: 'Thoughts successfully created'})
    ).catch((err) => {
        res.status(500).json(err)
    })
  },
  singleThoughtReaction(req,res) {
    console.log(req.body)
    console.log(req.params)
    Thought.findOneAndUpdate({ _id: req.params.thoughtsId }, { $addToSet: { reactions: req.body }}, { runValidators: true, new: true} )
    .then((thought) => {
        !thought
            ? res.status(404).json({ message: 'No thought with this ID'})
            : res.json({ message: "Reaction successfully added"})
    }).catch((err) => {
        res.status(500).json(err)
    })
  },
  singleThoughtReactionDelete(req,res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtsId }, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {new: true })
    .then((thought) =>
    !thought
        ? res.status(404).json({ message: 'Thought Id was not found'})
        : res.json(thought)
    ).catch((err)=> {
        res.json(500).json(err)
    })
  }
}