const express = require("express");
const app = express();
const port = 5263;
const hbs = require("hbs");
const path = require("path");
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// body - parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// ==== HOST NAME ====
app.listen(port, hostname, ()=> {
  console.log(`http://${hostname}:${port}/`)
});

// ---- contact router ----
const authRouter = express.Router();
app.use(authRouter)

authRouter
.route("/contact")
.get(getUser)
.post(postUser)

// STATIC FOLDER PATH LINKING
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// VIEW - ENGINE LINKING
const viewPath = path.join(__dirname, "../tamplates/views");
app.set("views engine", "hbs");
app.set("views", viewPath);

// PARTIALS FOLDER PATH LINKING
const partials = path.join(__dirname, "../tamplates/partials");
hbs.registerPartials(partials);

// ===== GET ATTRIBUTRES =====
app.get("/", (req, res)=> {
  res.render("index.hbs")
})


// get user function
function getUser(req, res){
  res.render("index.hbs")
}
// post user function
async function postUser(req, res){
  try{
  let obj = req.body;
  let user = await userModel.create(obj);
  console.log(user)
  res.render("index.hbs")
  }
catch(err){
  res.send(err).status(404)
}
}


// ===== MONGOOSE CONNECTION =====
const db_url = `mongodb+srv://anas:anas@food.t6wubmw.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(db_url)
.then(function(db){
  console.log("db connected !!!")
})
.catch(function(err){
  console.log(err)
});
// user schema
const userScheme = mongoose.Schema({
  name:{
    type: String, 
    required: true
  },
  email:{
    type: String,
    required: true
  },
  number: {
    type: String, 
    required: true
  }
});

const userModel = mongoose.model("userModel", userScheme)