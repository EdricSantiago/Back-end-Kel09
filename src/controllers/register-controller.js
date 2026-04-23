const registerService=require('../service/register-service')
const {successResponse} = require('../utils/response');

const register=async(req,res,next)=>{
    try{
        const{username,password,alamat,umur,tgl_lahir}=req.body;
        const user=await registerService.registerUser(username,password,alamat,umur,tgl_lahir);
        return successResponse(res, 201, 'Register berhasil!!',user);
    }
    catch(err){
        next(err);
    }
};

module.exports={register};