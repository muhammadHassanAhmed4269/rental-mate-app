const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const Authenticate = async (req, res, next) => {
    try{
        const token =  req.cookies.jwtToken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens:token": token });

        if (!rootUser){
            throw new Error("User not Found")
        }
        req.token = token;
        req.rootUser = rootUser;
        req.user_id = rootUser._id;

        next();
    }catch (err) {
        res.status(403).send("Unauthenticated:No token provided")
        console.log(err);
    }
}

module.exports = Authenticate