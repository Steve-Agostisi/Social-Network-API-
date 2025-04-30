const Thought = require("../models/Thought");
const User = require("../models/User");

class ThoughtController {
   static async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    }

   static async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }

   static async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
            res.status(201).json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    }

   static async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    }

  static async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json({ message: 'Thought deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    }

  static async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    }

  static async deleteReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports =  ThoughtController;