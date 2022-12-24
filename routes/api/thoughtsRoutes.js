const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
  singleThoughtReaction,
  singleThoughtDelete,
} = require('../../controllers/thoughtsController');

// /api/applications
router.route('/').get(getThoughts).post(createThoughts);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughtsId/reactions')
  .post(singleThoughtReaction)
  .delete(singleThoughtDelete);
// .delete(singleThoughtDelete);

module.exports = router;
