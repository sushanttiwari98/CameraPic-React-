//Setting up everything
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
//const path = require('path');
//const ejs = require('ejs');
const ImageModel = require('./models/images');      //load mongoose model for Image
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json)

//app.set("view engine", "ejs");          //Set EJS as templating engine
//app.use(express.static('uploads'));
//app.use(express.json());

//app.use(express.json({limit: "30mb",extended:true}));
//app.use(express.urlencoded({limit: "30mb",extended:true}));

app.use(cors());

//Connect to database
mongoose.connect("mongodb+srv://Sushant:<password>@cluster0.99un2.mongodb.net/Inspektlabs?retryWrites=true&w=majority");
//Multer for storing uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});

//GET request handler
app.get("/", async (req, res) =>{
    ImageModel.find({}, (err, result) =>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

//POST handler
app.post("/", upload.single('testImage'), (req, res) => {
    const newImage = new ImageModel({
        name: req.body.name,
        img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png",
        },
    });
    newImage.save().then((res) => {
        console.log("image saved");
    })
    .catch((err) => {
        console.log(err, "error occured");
    });
    res.send('image saved');
});

app.listen(4000, () => {
    console.log("Server Runs Perfectly!");
})
