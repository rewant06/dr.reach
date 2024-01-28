require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();


app.use(express.static("public"));
app.set('view engine','jsx');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// console.log(md5("HelloBro"));
async function startServer(){
    await mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true, useUnifiedTopology: true});
    console.log("Connected to MongoDB");
}
//mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});
//mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema ({
    email:String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

// userSchema.plugin(encrypt, { secret:process.env.SECRET, encryptedFields:["password"]});

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

////////////////////// Get ///////////////////////////////////////////////////
app.get("/", async function(req, res){
    res.render("home");
});

app.get("/login",async function(req, res){
    res.render("login");
});

app.get("/logout", async function(req,res){
    req.logout();
    res.redirect("/")
})

app.get("/register",async function(req, res){
    res.render("register");
});

app.get("secrets", async function(req,res){
    if(req.isAuthenticated()){
        res.render("secrets");
    } else{
        res.redirect("/login");
    }
});

////////////////////// Post /////////////////////////////////////
app.post("/register",  function(req,res){
    User.register({username:req.body.username}, req.body.password, function(err, user) {
        if (err) { 
            console.log(err);
            res.redirect("/register");
         }
         else{
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
      
      });

});

// app.post("/register", async function(req, res){
//    const newUser = new User({
//     email : req.body.username,
//     password: req.body.password
//    });
//    newUser.save(function (err) {
//     if (err) {
//         console.log(err);
//         res.redirect("/register"); // Handle registration failure
//     } else {
//         res.render("secrets");
//     }
//    });
// });




// app.post("/register", async function (req, res) {
//     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//         // Store hash in your password DB.
//         const newUser = new User({
//             email: req.body.username,
//             password: hash
//         });
    
//         try {
//              newUser.save();
//             res.render("secrets");
//         } catch (err) {
//             console.log(err);
//             res.redirect("/register"); 
//         }
//     });
    
// });
// app.post("/register", async function (req, res) {
//     const newUser = new User({
//         email: req.body.username,
//         password: md5(req.body.password)
//     });

//     try {
//         await newUser.save();
//         res.render("secrets");
//     } catch (err) {
//         console.log(err);
//         res.redirect("/register"); 
//     }
// });

//////////////////////////// Login/////////////////////////

app.post("/login",  function(req,res){
    const user = new User({
        username : req.body.username,
        password : req.body.password
    });

    req.login(user,function(err){

   
    if(err){
        console.log(err);

    }   else{
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secrets");
    });
            }
})

});

// app.post("/login", async function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//     User.findOne({email: username}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             if(foundUser){
//                 if(foundUser.password===password){
//                     res.render("secret");
//                 }

//             }
//         }
//     });
// });

// app.post("/login", async function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//     const foundUser = await User.findOne({email: username});
//        try {
//             if(foundUser){
//                 bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//                     // result == true
//                     if(result===true){
//                         res.render("secrets");
//                     }
//                 });
                
                

//             }
//         }

//         catch (err) {
//             console.error("Error saving item:", err);
//             res.redirect("/login");
//           }

//      });



/////////////////////////////////////////////////////////////////////////////

app.listen(3000,function(){
   console.log("Server started on port 3000.");
});

startServer();