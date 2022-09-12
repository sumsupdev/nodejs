const express = require('express');
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/users/',require('./routes/users'));



app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});
