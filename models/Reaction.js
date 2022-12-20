const { Schema, model } = require('mongoose');
const Tag = require('./Tag');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application

// Initialize our Application model
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
