const mongoose = require("mongoose");
const bcrypt= require("bcrypt");
const User = require('../models/user');

const register=async(req,res)=>{
    try{
        const{username,password}=req.body;
    
    const existingUser=await User.findOne({username});
    if(existingUser){
        return res.status(400).json({message:"Username sudah terambil"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await User.create({
        username,
        password:hashedPassword,
    });
    res.status(201).json({message:"Register Sukses!!",user:newUser});
    }
    catch(err){
    res.status(500).json({message:"Server error",error:err.message});
    }
};

const login=async(req,res)=>{
    try{
        const{username,password}=req.body;
    
        const user=await User.findOne({username});
        if(!user){
        return res.status(404).json({message:"User tidak ditemukan"});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Password salah"});
        }
       
        res.status(200).json({message:"Login berhasil",user});
    }
    catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
};

module.exports={register,login};