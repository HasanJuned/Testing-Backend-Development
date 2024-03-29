const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    email:{type:String,unique:true},
    fullName:{type:String},
    department:{type:String},
    batch:{type:String},
    section:{type:String},
    studentId:{type:String, unique:true},
    varsity:{type:String},
    password:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const UsersModel=mongoose.model('auths',DataSchema);
module.exports=UsersModel
