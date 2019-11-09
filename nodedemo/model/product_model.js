var db =require('../dbconnection');
var product={
    getAllProduct:function(callback){
        return db.query('select * from product',callback);
    },
    getAllProductById:function(product_id,callback){
        return db.query('select * from product where product_id=?',[product_id],callback);
    },
    addProductData:function(item,filename,callback){
        return db.query('insert into product values(?,?,?,?,?,?,?,?)',[item.product_id,item.product_name,item.product_price,item.product_qty,item.product_mfg,item.product_desc,filename,item.fk_cat_id],callback);
    },
    updateProductData:function(item,callback){
        return db.query('update product set product_name=?,product_price=?,product_qty=?,product_mfg=?,product_desc=?,product_img=?,fk_cat_id=? where product_id=?',[item.product_name,item.product_price,item.product_qty,item.product_mfg,item.product_desc,item.product_img,item.fk_cat_id,item.product_id],callback);
    },
    deleteProductData:function(product_id,callback){
        return db.query('delete from product where product_id=?',[product_id],callback);
    }
};
module.exports=product;