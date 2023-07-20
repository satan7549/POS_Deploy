// creating token and save in the cookie 
const jwt = require("jsonwebtoken")
const getJWTToken = function(){
    return jwt.sign({id:this._id},"SecreyKey",{
      expiresIn: "3D"
    })
  }

const sendToken = (user, statusCode,res)=>{
    const token = getJWTToken(); 

    //option for cookie
    const options = {
        expires: new Date(
            Date.now() + 1 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie('token',token,options).json({
        success: true,
        user,
        token
    })
} 

module.exports = sendToken;