const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const StudentTasksModel=mongoose.model('studentTasks',DataSchema);
module.exports=StudentTasksModel

