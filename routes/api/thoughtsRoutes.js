const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
  singleThoughtReaction,
  singleThoughtReactionDelete,
} = require('../../controllers/thoughtsController');


router.route('/').get(getThoughts).post(createThoughts);


router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtsId/reactions')
  .post(singleThoughtReaction)

router.route('/:thoughtsId/reactions/:reactionId')
  .delete(singleThoughtReactionDelete);

module.exports = router;
