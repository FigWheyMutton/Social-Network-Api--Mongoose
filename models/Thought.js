const {Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
    Types: Schema.Types.ObjectId,
    ref:'user'
    },
    reactions: [Reaction]
  }
)

thoughtSchema.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
})

module.exports = Thought;