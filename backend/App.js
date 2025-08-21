const express=require("express")
const app=express();
const Submission=require('./models/submission')
app.use(express.json());
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.post('/submit',async(req,res)=>
{
   try{
    const {fullName,department,position}=req.body;
    const newSubmission=new Submission({
        fullName,
        department,
        position
    });
    await newSubmission.save();
    res.render('confirmation');
   }catch(err)
   {
    res.status(500).send("Error saving in the database");
   }
})
app.listen(5000,()=>
{
    console.log("Server started")

})