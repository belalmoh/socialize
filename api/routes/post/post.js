const Post = require("../../models/post");
const User = require("../../models/user");
const router = require("express").Router();

// create a post
router.post("/", async (req, res) => {
    const post = new Post(req.body);
    try {
        const result = await post.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("success");
        } else {
            res.status(403).json("forbidden");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            const result = await post.updateOne(req.body);
            res.status(200).json(result);
        } else {
            res.status(403).json("forbidden");
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// like a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            const result = await post.updateOne({$push: {likes: req.body.userId}}, {new: true})
            res.status(200).json({action: "like", result});
        } else {
            const result = await post.updateOne({$pull: {likes: req.body.userId}}, {new: true})
            res.status(200).json({action: "dislike", result});
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get timeline posts of a specific user
router.get("/user/:userid", async (req, res) => {
    try {
        const user = await User.findById(req.params.userid);
        const posts = await Post.find({userId: req.params.userid});
        const friendsPosts = await Promise.all(
            user.following.map(friendId => {
                return Post.find(friendId);
            })
        );
        res.status(200).json({posts, friendsPosts});
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;