const {Schema ,model} =require('../connection')
const ProductShema =new Schema({
    // name: String,
    // email:String,
    // password:String
    name:String,
    category:String,
    price:Number

});

module.exports =model('product',ProductShema)