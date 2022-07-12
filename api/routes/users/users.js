const User = require('../../models/user');
const router = require("express").Router();
const { encrypt } = require('../../helpers/auth');

// update a user
router.put("/:id", async (req, res) => {
    if (req.body.password) {
        req.body.password = await encrypt(req.body.password);
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

});

// get a user
router.get("/:id", async (req, res) => {
    try {
        if (req.params.id) {
            const user = await User.findById(req.params.id);
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// follow a user
router.put("/:userid/follow/:id", async (req, res) => {
    if (req.params.userid !== req.params.id) {
        try {
            const user = await User.findById(req.params.userid);
            const userToFollow = await User.findById(req.params.id);

            if (!userToFollow.followers.includes(user._id)) {
                await user.updateOne({
                    $push: {
                        following: userToFollow._id
                    }
                });
                await userToFollow.updateOne({
                    $push: {
                        followers: user._id
                    }
                });
                res.status(200).json("success");
            } else {
                res.status(403).json("you already following this user");
            }

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("you can't follow yourself");
    }
});

router.put("/:userid/unfollow/:id", async (req, res) => {
    if (req.params.userid !== req.params.id) {
        try {
            const user = await User.findById(req.params.userid);
            const userToFollow = await User.findById(req.params.id);

            if (userToFollow.followers.includes(user._id)) {
                await user.updateOne({
                    $pull: {
                        following: userToFollow._id
                    }
                });
                await userToFollow.updateOne({
                    $pull: {
                        followers: user._id
                    }
                });
                res.status(200).json("success");
            } else {
                res.status(403).json("you already unfollowed this user");
            }

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("you can't unfollow yourself");
    }
});

module.exports = router;