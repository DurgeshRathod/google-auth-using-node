const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup')

const app = express();

app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send('HOME');
});

app.listen(3000,()=>{
    console.log('Running server on port 3000');
})
