const express = require('express');
const UserController = require('../../controllers/userController.js');

const router = express.Router();
const userController = new UserController();

// ALL of these routes are prefixed with '/api/users'

// Route for getting all users
router.get('/', userController.getAllUsers);

// Route for getting a single user by ID
router.get('/:userId', userController.getUserById);

// Route for creating a new user
router.post('/', userController.createUser);

// Route for updating a user by ID
 router.put('/:userId', userController.updateUser);

// Route for deleting a user by ID
 router.delete('/:userId', userController.deleteUser);

// Route for adding a friend
 router.post('/:userId/friends/:friendId', userController.addFriend);

// Route for removing a friend
 router.delete('/:userId/friends/:friendId', userController.removeFriend);
 module.exports = router;