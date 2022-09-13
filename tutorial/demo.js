const express = require('express');
const jwt = require('jsonwebtoken');
const app =express();
const util= require('./utils/auths')


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/users/',require('./routes/users'));

app.get('',(req,res)=>{
    res.json({message: "Hi, welcome to the api service"});
});


app.post('/api/posts',util,(req,res)=>{
   jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json(
                {message:"POSTS DONE",
                authData
        });
        }

   });
    
});


app.post('/api/login',(req,res)=>{
    const user ={
        id:1,
        username:'admin',
        email: 'admin@admin.com'
    }
    jwt.sign({user:user},'secretKey',(err,token)=>{
        res.json({token,})
    });
});




app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});

