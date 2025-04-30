const User = require('../models/User.js');
const Thought = require('../models/Thought.js')

class UserController {
    // Method to get all users
    async getAllUsers(req, res) {
        console.log("Hit GET all Users route")
        try {
            const users = await User.find().populate('thoughts').populate('friends');
            res.status(200).json(users);
        } catch (err) {
            console.log("Error: ", err)
            res.status(500).json(err);
        }
    }

    // Method to get a single user by ID
    async getUserById (req, res) {
        try {
            const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
         }
    }

//     // Method to create a new user
     async createUser (req, res) {
        console.log("Incoming data: ", req.body)
         try {
            const user = await User.create(req.body);
             res.status(201).json(user);
         } catch (err) {
            res.status(400).json(err);
         }
     }//,

//     // Method to update a user by ID
    async updateUser(req, res) {
         try {
             const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
             if (!user) {
                 return res.status(404).json({ message: 'User not found' });
             }
             res.status(200).json(user);
         } catch (err) {
             res.status(400).json(err);
         }
     }

     // Method to delete a user by ID
    async deleteUser(req, res) {
         try {
             const user = await User.findByIdAndDelete(req.params.userId);
            if (!user) {
                 return res.status(404).json({ message: 'User not found' });
             }
             res.status(204).send();
         } catch (err) {
             res.status(500).json(err);
         }
     }

//     // Method to add a friend
    async addFriend(req, res) {
        try {
             const user = await User.findByIdAndUpdate(
                req.params.userId,
                 { $addToSet: { friends: req.params.friendId } },
                 { new: true }
            );
            if (!user) {
                 return res.status(404).json({ message: 'User not found' });
             }
             res.status(200).json(user);
         } catch (err) {
             res.status(500).json(err);
         }
     }

//     // Method to remove a friend
    async removeFriend(req, res) {
         try {
             const user = await User.findByIdAndUpdate(
                 req.params.userId,
                 { $pull: { friends: req.params.friendId } },
                 { new: true }
             );
             if (!user) {
                 return res.status(404).json({ message: 'User not found' });
             }
             res.status(200).json(user);
         } catch (err) {
             res.status(500).json(err);
         }
     }
}

module.exports = UserController;