const {Schema ,model} =require('../connection')
const ProductShema =new Schema({
    name: String,
    email:String,
    password:String
});

module.exports =model('product',ProductShema)