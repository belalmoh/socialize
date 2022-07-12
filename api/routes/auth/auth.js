const router = require("express").Router();
const User = require('../../models/user');
const { encrypt } = require('../../helpers/auth');
const { registerSchema, loginSchema } = require('./schema');

router.post('/register', registerSchema, async (req, res) => {
    let password = encrypt(req.body.password);
    const user = new User({ ...req.body, password });
    try {
        const result = await user.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/login", loginSchema, async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if(user.password == encrypt(req.body.password)) res.status(200).json(user);
        else res.status(500).json("incorrect password");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;