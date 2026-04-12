const loginService=require('./login-service')

const login=async(req,res)=>{
    try{
        const{username,password}=req.body;
        const result=await loginService.loginUser(username,password);
        res.status(200).json({message:'Login berhasil',...result});
    }
    catch(err)
    {
        const status=err.statusCode||500;
        res.status(status).json({message:err.message});
    }
};
module.exports={login};