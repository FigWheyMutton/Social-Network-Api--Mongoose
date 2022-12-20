const {Schema, model } = require('mongoose');
const formattedDate = require('../utils/formatDate');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formattedDate(timestamp)
    },
    username: {
      type: String,
      required: true,
    // Types: Schema.Types.ObjectId,
    // ref:'user',
    // required: true,
    },
    reactions: [reactionSchema]
  },{
    toJSON: {
      getters: true
    }
  }
)

thoughtSchema.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;