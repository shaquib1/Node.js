const express = require("express");
const reqFilter=require('./Middleware');
const route=express.Router();


const app = express();

// use  of middle ware lecture 25
//this is application level middleware

//const reqFilter = (req, res, next) => {
  //if (!req.query.age) {
    //res.send("Please provide age");
  //} else if (req.query.age < 18) {
    //res.send("you cannot access this website");
  //} else {
  //  next();
 // }
//};

//app.use(reqFilter); //application level middleware

route.use(reqFilter); // to use router level middleware

app.get("/", (req, res) => {
  res.send("hello this is home page");
});

// take router level middleware is reqFilter
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get('/home',reqFilter,(req,res)=>{
    res.send("This is home page");
});

route.get('/signup',reqFilter,(req,res)=>{
    res.send("This is signup page");
});
route.get('/login',reqFilter,(req,res)=>{
    res.send("This is login page");
});

app.use('/',route);



app.listen(3030);

//Middleware types:
// Application level
// router level
//error handling
//built in
// third party
