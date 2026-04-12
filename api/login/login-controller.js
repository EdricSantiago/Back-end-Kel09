const mongoose = require("mongoose");
const bcrypt= require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const register=async(req,res)=>{
    try{
        const{username,password}=req.body;

    if(!username||!password){
        return res.status(400).json({message:"Username dan Password wajib terisi!"})
    }
    
    const existingUser=await User.findOne({username});
    if(existingUser){
        return res.status(400).json({message:"Username sudah terambil"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await User.create({
        username,
        password:hashedPassword,
    });

    const{password: _, ...userwithoutPassword}=newUser.toObject();
    res.status(201).json({message:"Register Sukses!!",user:userwithoutPassword});
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

        const token=jwt.sign(
            {id:user.id,username:user.username},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        );
        
        const{password: _, ...userwithoutPassword}=user.toObject();
        res.status(200).json({message:"Login berhasil",user:userwithoutPassword ,token});
    }
    catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
};

module.exports={register,login};