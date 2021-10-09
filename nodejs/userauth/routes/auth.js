const router = require("express").Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../model/User")
const  {registerValidation, loginValidation} = require("./validation")


router.post('/register', async(req, res)=>{

    //Lets validate the data

    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    //checking if user is already in db
    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send("Email Already Exist")
    
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser); 
    }catch(err){
        res.status(400).send(err)
    }
})

//LOGIN
router.post("/login", async(req, res)=>{

    //Lets validate the data

    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    //checking if user is already in db
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email or Password is wrong")
    //If password is correct

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) res.status(400).send("Invalid pass");



    //create and assign token
    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);


    res.send("LoggedIn")

})


module.exports = router;