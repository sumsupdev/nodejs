function verifyToken(req,res,next){
    const b_header =req.headers['authorization']
    if (typeof b_header !== "undefined"){
        const b_token = b_header.split(' ')[1]
        req.token = b_token
        next();

    }else{
        res.sendStatus(403); //forbidden
    }
}

module.exports = verifyToken;