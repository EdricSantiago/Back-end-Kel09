const User=require('../models/userModel');

const findByUsername=async(username)=>{
    return await User.findOne({username});
};

module.exports={findByUsername};