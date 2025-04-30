 const express = require('express');
 const ThoughtController = require('../../controllers/thoughtController.js');

 const router = express.Router(); 
 


 // Define routes for thoughts
 router.route('/')
     .get(ThoughtController.getAllThoughts)
     .post(ThoughtController.createThought);

 router.route('/:thoughtId')
     .get(ThoughtController.getThoughtById)
     .put(ThoughtController.updateThought)
     .delete(ThoughtController.deleteThought);

 router.route('/:thoughtId/reactions')
     .post(ThoughtController.addReaction);
    
 router.route('/:thoughtId/reactions/:reactionId')
     .delete(ThoughtController.deleteReaction);

 module.exports = router; 