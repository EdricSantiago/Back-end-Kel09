const loginService=require('../service/login-service')
const {successResponse} = require('../utils/response');

const login=async(req,res,next)=>{
    try{
        const{username,password}=req.body;
        const result=await loginService.loginUser(username,password);
        return successResponse(res, 200, 'Login Berhasil ',result);
    }
    catch(err)
    {
        next(err);
    }
};
module.exports={login};