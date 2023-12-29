const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) =>{
    res.send('Hello World from the server');
});

router.post('/register',  async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if ( !name || !email || !password){
        return res.status(422).json({ error: 'All fields are required' });
    }

    try {
        const emailExist = await User.findOne({email: email});
        if (emailExist) return res.status(422).json({ error: 'Email already exists' });
        // else if (password !== cpassword) return res.status(422).json({ error: 'password are not matching' });
        const user = new User({ name, email, phone, password, cpassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully'});
    }catch (err){
        console.log(err)
    }
});

router.post('/login',  async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password){
        return res.status(400).json({ error: 'All fields are required' });
    }

    const emailExist = await User.findOne({email: email});

    if (emailExist){
        const isMatch = await bcrypt.compare(password, emailExist.password);
        const token = await emailExist.generateAuthToken();
        console.log(token);
        res.cookie("jwtToken", token, {
            expires:  new Date(Date.now() + 25892000000),
            httpOnly: true
        })
        if (!isMatch)
            res.status(400).json({ error: "Invalid Credentials" });
        else
            res.json({ message: "User login Successfully" });
    }else{
        res.status(400).json({ error: "Invalid Credentials" });
    }
});


router.get('/about', authenticate, (req, res) =>{
    res.send('About World from the server');
});

module.exports = router