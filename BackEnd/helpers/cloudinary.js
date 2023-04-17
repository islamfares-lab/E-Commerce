const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});

function uploads(file,folder){
    return new Promise(function(resolve,reject){
        cloudinary.uploader.upload(file,(result)=>{
            resolve({url:result.url,id:result.public_id},{
                folder:folder
            })
        })
    })
}

module.exports=uploads;