var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
       
    }
});
var upload=multer({storage:storage});

var product=require('../model/product_model');
router.get('/:product_id?',function(req,res,next){
    if(req.params.product_id){
        product.getAllProductById(req.params.product_id,function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }else{
        product.getAllProduct(function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});

router.post('/',upload.single('product_img'),function(req,res,next){
    product.addProductData(req.body,req.file.filename,function(err,rows){
       if(err) 
       {
           res.json(err);
       }
       else
       {
           res.json(rows);
       }
    });
});
router.delete('/:product_id',function(req,res,next){
    product.deleteProductData(req.params.product_id,function(err,rows){
       if(err) 
       {
           res.json(err);
       }
       else
       {
           res.json(rows);
       }
    });
});
router.put('/:product_id',function(req,res,next){
    product.updateProductData(req.body,function(err,rows){
        
        console.log(req.body);
       if(err) 
       {
           res.json(err);
       }
       else
       {
           res.json(rows);
            console.log(rows);
       }
    });
});
module.exports=router;