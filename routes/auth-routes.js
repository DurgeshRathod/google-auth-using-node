const router=require('express').Router();
const passport=require('passport');


//AUTH LOGIN
router.get('/login',(req,res)=>{
    res.send('logged in')
});

//AUTH LOGOUT
router.get('/logout',()=>{
    res.send('logging out');
});

router.get('/google',passport.authenticate('google',
    {
        scope:['profile']
    }
));


//CALLBACK ROUTE FOR GOOGLE AUTH
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('You reached the call back URI')
})
module.exports=router;

