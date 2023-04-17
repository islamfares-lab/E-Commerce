const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString())
    }
})

const fileFilter=(req,file,cb)=>{
    // Reject a file
    if(file.mimetype === 'image/jpg' || file.mimetype==='image/png'){
        cb(null,true);
    }else{
        cb(null,false)
    }
};

const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 * 5
    },
    fileFilter:fileFilter
});

module.exports=upload;