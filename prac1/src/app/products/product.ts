export class prod{
  public constructor(
   public product_id:number,
   public product_name:string,
   public product_price:number,
   public product_qty:number,
   public product_mfg:Date,
   public product_desc:Text,
   public product_img:File,
   public fk_cat_id:number){
   }
 }
