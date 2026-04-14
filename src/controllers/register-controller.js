const registerService=require('../service/register-service')
const {successResponse} = require('../utils/response');

const register=async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user=await registerService.registerUser(username,password);
        return successResponse(res, 201, 'Register berhasil!!',user);
    }
    catch(err){
        next(err);
    }
};

module.exports={register};