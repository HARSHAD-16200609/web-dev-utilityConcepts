import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import "./auth/google.js"; // Import passport Google strategy configuration


dotenv.config();

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send(`<a href="/auth/google">Login with Google</a>`);
  }
);

app.get('/auth/google',
  passport.authenticate('google', { 
    scope: [ 'email', 'profile' ],
    
  })
);
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));


const authChecker=(req,res,next)=>{
     if(req.isAuthenticated()){
return   next();
    }
  res.redirect('/')
      
}

app.get('/auth/google/success',authChecker,(req,res)=>{

  res.send(`
  <h1>hello ${req.user.displayName}</h1>
  <a href="/logout">Logout</a>
  `)
   
})


 app.get('/logout',(req,res)=>{

    req.logout(()=>{
       res.redirect('/')  
    });
   
 })


app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
})

export default app;
