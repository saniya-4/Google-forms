const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/google-form')
.then(()=>console.log('Mongodb connected'))
.catch((err)=>console.error('Mongodb connection error',err));
const submissionSchema=new mongoose.Schema({
    fullName:
    {
        type:String,
        required:true,

    },
    department:{
       type:String,
       required:true,
    },
    position:
    {
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Submission',submissionSchema);