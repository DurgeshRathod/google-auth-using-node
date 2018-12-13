const passport =require('passport');
const GoogleStratergy = require('passport-google-oauth20');
const keys = require('./Keys')
passport.use(new GoogleStratergy(
    {
        //OPTIONS FOR GOOGLE STRATERGY
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },
    (accessToken,refreshToken,profile,done)=>{
        //PASSPORT CALLBACK FUNCTION
        console.log('passport callback fired!!');
        //console.log(profile);
        return done(JSON.stringify(profile));
    }
))