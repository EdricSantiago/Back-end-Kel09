const registerService=require('./register-service')

const register=async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user=await registerService.registerUser(username,password);
        res.status(201).json({message:'Register berhasil!!',user});
    }
    catch(err){
        const status=err.statusCode||500;
        res.status(status).json({meesage:err.message});
    }
};

module.exports={register};