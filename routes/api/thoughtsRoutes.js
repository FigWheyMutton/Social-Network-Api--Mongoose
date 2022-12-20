const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
  singleThoughtReaction,
  singleThoughtDelete,
} = require('../../controllers/appController');

// /api/applications
router.route('/').get(getThoughts).post(createThoughts);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughts/:thoughtsId/reactions').post(singleThoughtReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/thoughts/:thoughtsId/reactions').delete(singleThoughtDelete);

module.exports = router;
