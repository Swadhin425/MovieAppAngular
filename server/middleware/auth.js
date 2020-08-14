const {User}  =require('../model/User')


let auth= (req,res,next)=>{

  //get the token from browser
  let token=req.cookies.w_auth;

  //verify the token
  User.findByToken(token,(err,user)=>{
      if(err) throw err;
      if(!user)
      return res.json({
          isAuth:false,
          error:true
      });

      req.token=token;
      req.user=user;

      next()

  });
 
}


module.exports={auth}