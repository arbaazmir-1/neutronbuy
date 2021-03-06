const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");
const generateToken = require('../utils/generateToken')

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or Password");
  }

  res.send(`email: ${email} password: ${password}`);
});



const registerUser = asyncHandler(async (req, res) => {
    const { email, password,name } = req.body;
    const userExists = await User.findOne({ email });
  
    if(userExists){
        res.status(400)
        throw new Error("You already have an account! Login")
    }
    
    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
  
    res.send(`email: ${email} password: ${password}`);
  });



const getUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id)
   if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
      
        })
   }else{
       res.status(404)
       throw new Error('Invalid email or Password')
   }
   res.send('Fuck yes')
  });

module.exports = {authUser,getUserProfile,registerUser};
