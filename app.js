require('dotenv').config()//jshint esversion:6
const express=require("express");

//const { ethers } = require("ethers");
//import { ethers } from "ethers";
//const provider = new ethers.providers.Web3Provider(window.ethereum)

//async function connectToMetamask(){
  //console.log("Account:");
 // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
//   await provider.send("eth_requestAccounts", []);
//   const signer = provider.getSigner();
//   console.log("Account:", await signer.getAddress());
// }
//const signer = provider.getSigner()

// const API_KEY = process.env.API_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

//const contract = require("../artifacts/contracts/ManufactureProductDetails.sol/ManufactureProductDetails.json");

//const { ethers } = require("hardhat");
//const contract = require("../artifacts/contracts/ManufactureProductDetails.sol/ManufactureProductDetails.json");
//console.log(JSON.stringify(contract.abi));
//const API_KEY=process.env.API_KEY;
//const PRIVATE_KEY=process.env.PRIVATE_KEY;
//const CONTRACT_ADDRESS=process.env.CONTRACT_ADDRESS;
//const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
//const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
//const ManufactureProductDetailsContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

const contract = require("./artifacts/contracts/ManufactureProductDetails.sol/ManufactureProductDetails.json");
//console.log(JSON.stringify(contract.abi));
const API_KEY=process.env.API_KEY;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS=process.env.CONTRACT_ADDRESS;
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const ManufactureProductDetailsContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);



const bodyParser=require("body-parser");
const ejs=require("ejs");
const QRCode=require('qrcode')
var cookieParser = require('cookie-parser')
var Web3 = require('web3');
var web3 = new Web3('http://localhost:7545');
web3.setProvider('ws://localhost:7546');
var net = require('net');
var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net);
var Web3HttpProvider = require('web3-providers-http');
// const abi='[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"serialID","type":"string"},{"indexed":false,"internalType":"string","name":"sourceManufacture","type":"string"},{"indexed":false,"internalType":"string","name":"destinationManufacture","type":"string"},{"indexed":false,"internalType":"string","name":"sourceDistributor","type":"string"},{"indexed":false,"internalType":"string","name":"destinationDistributor","type":"string"}],"name":"ProductFirstPoint","type":"event"},{"inputs":[{"internalType":"string","name":"serialID","type":"string"},{"internalType":"string","name":"sourceManufacture","type":"string"},{"internalType":"string","name":"destinationManufacture","type":"string"}],"name":"addProductFirstPointDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"serialID","type":"string"},{"internalType":"string","name":"sourceDistributor","type":"string"},{"internalType":"string","name":"destinationDistributor","type":"string"}],"name":"addProductSecondPointDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"authority","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"dataOfProduct","outputs":[{"internalType":"string","name":"sourceManufacture","type":"string"},{"internalType":"string","name":"destinationManufacture","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"dataOfProduct2","outputs":[{"internalType":"string","name":"sourceDistributor","type":"string"},{"internalType":"string","name":"destinationDistributor","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"serialID","type":"string"}],"name":"getDistributorDetials","outputs":[{"components":[{"internalType":"string","name":"sourceDistributor","type":"string"},{"internalType":"string","name":"destinationDistributor","type":"string"}],"internalType":"struct ManufactureProductDetails.DistributorDetails","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"serialID","type":"string"}],"name":"getManufactureDetials","outputs":[{"components":[{"internalType":"string","name":"sourceManufacture","type":"string"},{"internalType":"string","name":"destinationManufacture","type":"string"}],"internalType":"struct ManufactureProductDetails.ManufactureDetails","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"}]";
// var contract = new web3.eth.Contract(abi, address);



let curName="";

//const web3 = require("web3");
fs = require("fs");
var Contract = require('web3-eth-contract');
Contract.setProvider('ws://localhost:7545');
//var contract = new web3.eth.Contract(abi, 0x5FbDB2315678afecb367f032d93F642f64180aa3);
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const app=express();
var LocalStrategy = require('passport-local').Strategy;
const mongoose=require("mongoose");
const md5=require("md5");
const encrypt=require("mongoose-encryption");
const Session=require("express-session");
const passport=require("passport");

var async = require("async");
const passportLocalMongoose=require("passport-local-mongoose");
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cookieParser('This is our secret'));
app.use(Session({
  secret:"This is our secret.",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

const { MongoClient, ServerApiVersion } = require('mongodb');
const { cons } = require('fp-ts/lib/ReadonlyNonEmptyArray');
const { reduceRight } = require('fp-ts/lib/Foldable');
mongoose.connect("mongodb+srv://naman:NAMANjaypee@cluster0.fymme.mongodb.net/?retryWrites=true&w=majority"
 ).then(()=>console.log("Database Connection Success")).catch((h)=>console.log(h));
 const Schema=mongoose.Schema;
 const manufactureSchema = new Schema({
 username:String,
 password:String
 });
 const distributorSchema = new Schema({
  username:String,
  password:String
  });
 const purchaserSchema = new Schema({
  username:String,
  password:String
  });
  const purchasedProductSchema = new Schema({
    idOfPurchaser:String,
  idOfPurchasedProduct:String,
  idOfManufacture:String,
  nameOfDistributor:String,
  destination:Number
    });
    const QrSchema = new Schema({
      serialId:String,
      qr_url:String
      });
manufactureSchema.plugin(passportLocalMongoose);
distributorSchema.plugin(passportLocalMongoose);
purchaserSchema.plugin(passportLocalMongoose);

const Manufacture=new mongoose.model("manufactureUser",manufactureSchema);
const PurchasedProduct=new mongoose.model("purchasedProduct",purchasedProductSchema);
const Distributor=new mongoose.model("distributorUser",distributorSchema);
const Purchaser=new mongoose.model("purchaserUser",purchaserSchema);
const QR=new mongoose.model("QrProduct",QrSchema);
const productSchema= new Schema({
  name:String,
  serialId:String,
  price:Number,
  description:String,
  //manufactureId:String,
  idOfManufacture:String,
  avail:Number
  });
  //const Product=new mongoose.model("product",productSchema);
  const Product=mongoose.model(
    "product",//name
productSchema,
"product"
  )
  passport.use('manufact', new LocalStrategy(Manufacture.authenticate())); 
passport.use('purchase', new LocalStrategy(Purchaser.authenticate()));
passport.use('distribut', new LocalStrategy(Distributor.authenticate()));
// passport.use(Manufacture.createStrategy());
passport.serializeUser(function(user, done) {
  curId=user.id;
  done(null, user.id);
});
passport.deserializeUser(function(user, done) {

  //console.log(Manufacture);
 // Manufacture.findById(id, function(err, user) {
   // console.log("user");
    // console.log(user);    
    // done(err,user);
    if(user!=null){
      //console.log("blabla ",user);
      curId=user;
    done(null,user);
    }

});
//});
 app.get('/where',function(req,res){
  res.render("index");
 });

app.get("/manufacture",function(req,res){
res.render("manufactureDetails");
});

app.get("/distributor",function(req,res){
  res.render("distributorDetails");
  });

app.get("/registerManufacture",function(req,res){
  res.render("registerManufacture");
  });

  app.get("/registerDistributor",function(req,res){
    res.render("registerDistributor");
    });

app.post("/manufactureRegister",function(req,res){
  Manufacture.register({username:req.body.username},req.body.password,function(err,user){
  //  console.log("manufacture Id");
    if(err)
    {
      console.log(err);
      res.redirect("/manufactureRegister");
    }
    else
    {curName=req.body.username;
      passport.authenticate("manufact")(req,res,function(err)
    {
      res.render("manufactureHome");
    });
    }
  });
});

// app.post("/distributorRegister",function(req,res){
//   Distributor.register({username:req.body.username},req.body.password,function(err,user){
//    //.log("manufacture Id");
//     if(err)
//     {
//       console.log(err);
//       res.redirect("/register");
//     }
//     else
//     {
//       passport.authenticate("local")(req,res,function(err)
//     {
//       res.redirect("/secrets");
//     });
//     }
//   });
// });

app.post("/purchaserRegister",function(req,res){
  Purchaser.register({username:req.body.username},req.body.password,function(err,user){
    if(err)
    { console.log("An error");
      console.log(err);
      res.redirect("/purchaserRegister");
    }
    else
    {
      passport.authenticate("purchase")(req,res,function(err)
    {
      Product.find({avail:"1"}, function ( err,foundItems) {
        //console.log(foundItems);
        res.render("UserHome",{productData:foundItems});
      });
      
    });
    }
  });
});
app.post("/distributorRegister",function(req,res){
  Distributor.register({username:req.body.username},req.body.password,function(err,user){
    if(err)
    { console.log("An error");
      console.log(err);
      res.render("distributorDetails");
    }
    else
    {
      passport.authenticate("distribut")(req,res,function(err)
    {
      res.render("distributorHome");
      
    });
    }
  });
});

app.post("/loginManufacture",function(req,res){
const manufactureTemp=new Manufacture({
  username:req.body.username,
  password:req.body.password
})

req.login(manufactureTemp,function(err){
  //console.log("hello");
  if(err)
  console.log(err);
  else{
    passport.authenticate("manufact")(req,res,function(){
     // console.log("Hi",req.user.id);
res.render("manufactureHome");
    });
  }
})
});




app.post("/loginDistributor",function(req,res){
  const distributorTemp=new Distributor({
    username:req.body.username,
    password:req.body.password
  })
//   console.log("1");
// console.log(req.body.username);
curName=req.body.username;
  req.login(distributorTemp,function(err){
    //console.log("hello");
    if(err)
    console.log(err);
    else{
      passport.authenticate("distribut")(req,res,function(){
  res.render("distributorHome");
      });
    }
  })
  });

app.get("/loginManufacture",function(req,res){
res.render("loginManufacture");
});

app.get("/loginDistributor",function(req,res){
  res.render("loginDistributor");
  });
app.get("/",function(req,res){
res.render("home");
});

app.get("/addProduct",function(req,res){
 
res.render("addProduct");
});


app.post("/addProduct",function(req,res){
const name=req.body.username;
const serialId=req.body.serialId;
const price=req.body.price;
const description=req.body.description;
const idOfManufacture=curId;
const avail=1;
const prod= new Product({
  name:name,
  serialId:serialId,
  price:price,
  description:description,
  idOfManufacture:idOfManufacture,
  avail:avail
});
prod.save();
res.render("manufactureHome");

});


app.get("/purchaser",function(req,res){

res.render("purchaserDetails");
});

app.get("/registerPurchaser",function(req,res){
res.render("registerPurchaser");
})



app.get("/loginPurchaser",function(req,res){
res.render("loginPurchaser");
});


app.get("/seeProducts",function(req,res){
  Product.find({avail:"1"}, function ( err,foundItems) {
    //console.log(foundItems);
    res.render("userHome",{productData:foundItems});
  });
});

app.post("/loginPurchaser",function(req,res){
  const PurchaserTemp=new Purchaser({
    username:req.body.username,
    password:req.body.password
  })
  req.login(PurchaserTemp,function(err){
    if(err)
    console.log(err);
    else{
      mode=1;
      
      passport.authenticate("purchase")(req,res,function(err){
        res.render("purchaserOptions",{curId:curId});
        // Product.find({}, function ( err,foundItems) {
        //   console.log(foundItems);
        //   res.render("userHome",{productData:foundItems});
        // });
      });
    }
  })
});

app.get("/buyProduct/:productSerialId",function(req,res){
  const requestedId=req.params.productSerialId;
  //console.log("Sidre ");
  //console.log(curId);
  Product.findOne({_id:requestedId},function(err,foundList){
    //console.log(foundList);
    if(!err)
    {
      if(foundList)
      {

        const PurchasedProductTemp=new PurchasedProduct({
          idOfPurchaser:curId,
          idOfPurchasedProduct:foundList.id,
          idOfManufacture:foundList.idOfManufacture,
          nameOfDistributor:"NIL",
          destination:0
        })
        //console.log("Here you go ",PurchasedProductTemp)
        PurchasedProductTemp.save();
        // res.render("post",{
        //   title:foundList.title,
        //   content:foundList.content
        // });
      Product.updateOne({_id:requestedId}, {$set: {avail: "0"}},function(e){
          if(e)
          console.log(e);
        });
        res.redirect("/seeProducts")
      }
    }
    else
    console.log(err);
  });
// const purchasedProductTemp=new PurchasedProduct({
//   idOfPurchaser:res.user.id,
//   idOfPurchasedProduct:String,
//   idOfManufacture:String,
//   destination:"manufacture"
// });
});

app.get("/reviewProducts",function(req,res){

  PurchasedProduct.find({idOfManufacture:curId,destination:0},{idOfPurchasedProduct:1,"_id":0},function(err,foundList){
    if(!err)
    {
      if(foundList)
      {
        console.log(foundList);
        let arr = foundList.map(({ idOfPurchasedProduct }) => idOfPurchasedProduct)
      console.log(arr);


      Product.find({_id:{$in:arr}},function(err,foundItems){
        if(!err)
        {
          console.log(foundItems)
         res.render("reviewProducts",{productData:foundItems});
        }
        else
        console.log(err);
      });
       
      }
    }
    else
    console.log(err);
  });

});


app.get("/sendProductToDistributor/:productSerialId",function(req,res){
  const requestedId=req.params.productSerialId;
  // PurchasedProduct.find({idOfPurchasedProduct:requestedId},function(err,foundList){
  //   if(!err)
  //   {
  //     if(foundList)
  //     {
  //       console.log(foundList);
  //       let arr = foundList.map(({ idOfPurchasedProduct }) => idOfPurchasedProduct)
  //     console.log(arr);
  //     Product.find({_id:{$in:arr}},function(err,foundItems){
  //       if(!err)
  //       {
  //         console.log(foundItems)
  //        res.render("reviewProducts",{productData:foundItems});
  //       }
  //       else
  //       console.log(err);
  //     });
       
  //     }
  //   }
  //   else
  //   console.log(err);
  // });
  Product.findOne({_id:requestedId},function(err,foundList){
    //console.log(foundList);
    if(!err)
    {
      if(foundList)
      {
        res.render("SendProductToDistributor",{productData:foundList});
      }
    }
    else
    console.log(err);
  });
 // console.log(requestedId);
  
});

app.post("/sendProductToDist/:productSerialId/:idOfProd",function(req,res){
  const requestedId=req.params.productSerialId;
  const idOfProduct=req.params.idOfProd;
  console.log("Done Bro");
const serialIdManufacture=req.body.serialId;
const sourceManufacture=req.body.sourceAddr;
const destManufacture=req.body.dest;
const distributorName=req.body.distributorName;
// let data = {
//   Owner:"Manufacture",
//   Serial_ID:serialIdManufacture,
//   Source:sourceManufacture,
//   Destination:destManufacture
// };
// let stringdata = JSON.stringify(data);
// QRCode.toString(stringdata,{type:'terminal'}, function (err, url) {
//   if(err) return console.log("error occurred")
//   console.log("url")
//   const qr_add=new QR({
//     serialId:requestedId,
//     qr_url:url
//   });
//const tx=ManufactureProductDetailsContract.addProductFirstPointDetails(requestedId,serialIdManufacture,sourceManufacture,sourceManufacture);
//console.log(tx);
async function main() {
  const tx=ManufactureProductDetailsContract.addProductFirstPointDetails(requestedId,serialIdManufacture,sourceManufacture,destManufacture);
  console.log("i am here");  
  console.log(tx);
}
main();
console.log("Deployed"); 
console.log(idOfProduct); 
// qr_add.save();
  // var myquery = { destination: "0" };
  // var newvalues = { $set: { destination: "1" } };
  // PurchasedProduct.updateOne(myquery, newvalues, function(err, res1) {
  //   if(err)console.log(err)
  //   res.redirect("/reviewProducts");
  // });
  PurchasedProduct.update({idOfPurchasedProduct:idOfProduct}, {$set: {destination: "1"}},function(e){
    if(e)
    console.log(e);
  });
  PurchasedProduct.update({idOfPurchasedProduct:idOfProduct}, {$set: {nameOfDistributor:distributorName}},function(e){
    if(e)
    console.log(e);
  });
  // var myquery = { nameOfDistributor: "0" };
  // var newvalues = { $set: { destination: "1" } };
  // PurchasedProduct.updateOne(myquery, newvalues, function(err, res1) {
  //   if(err)console.log(err)
  //   res.redirect("/reviewProducts");
  // });
  res.redirect("/reviewProducts");
})
//console.log(requestedId);
// ManufactureProductDetails.addProductFirstPointDetails(serialIdManufacture,sourceManufacture,destManufacture).call(0, (error, result) => {
//   if (!error) {
//     console.log("Done Bro");
//   }
// });;
//});


app.get("/reviewProductsbyDistributor",function(req,res){
console.log("Name ",curName);
  PurchasedProduct.find({nameOfDistributor:curName,destination:1},function(err,foundList){
    if(!err)
    {
      if(foundList)
      {
        console.log("Dist Details");
        console.log(foundList);

        let arr = foundList.map(({ idOfPurchasedProduct }) => idOfPurchasedProduct)
      console.log(arr);


      Product.find({_id:{$in:arr}},function(err,foundItems){
        if(!err)
        {
          console.log(foundItems)
         res.render("reviewProductsbyDistributor",{productData:foundItems});
        }
        else
        console.log(err);
      });
       



      }
    }
  })


});

app.get("/sendProductToPurchaser/:productSerialId",function(req,res){
  const requestedId=req.params.productSerialId;
  Product.findOne({_id:requestedId},function(err,foundList){
    //console.log(foundList);
    if(!err)
    {
      if(foundList)
      {
        res.render("SendProductToPurchaser",{productData:foundList});
      }
    }
    else
    console.log(err);
  });
 // console.log(requestedId);
  
});


app.post("/sendProductToPurch/:productSerialId/:idOfProd",function(req,res){
  const requestedId=req.params.productSerialId;
  const idOfProduct=req.params.idOfProd;
  console.log("Done Bro");
const serialIdDistributor=req.body.serialId;
const sourceDistributor=req.body.sourceAddr;
const destDistributor=req.body.dest;
async function main() {
  const tx=ManufactureProductDetailsContract.addProductSecondPointDetails(requestedId,serialIdDistributor,sourceDistributor,destDistributor);
  console.log("i am here*2");  
  console.log(tx);
}
main();
console.log("Deployed"); 
console.log(idOfProduct); 

  PurchasedProduct.update({idOfPurchasedProduct:idOfProduct}, {$set: {destination: "2"}},function(e){
    if(e)
    console.log(e);
  });
  // PurchasedProduct.update({idOfPurchasedProduct:idOfProduct}, {$set: {nameOfDistributor:distributorName}},function(e){
  //   if(e)
  //   console.log(e);
  // });
  res.redirect("/reviewProducts");
})

app.get("/checkRecievedProducts",function(req,res){
  
  PurchasedProduct.find({idOfPurchaser:curId,destination:2},function(err,foundList){
   if(err)
   console.log(err);
 let arr = foundList.map(({ idOfPurchasedProduct }) => idOfPurchasedProduct)
 Product.find({_id:{$in:arr}},function(err,foundItems){
  if(!err)
  {
    console.log(foundItems)
   res.render("reviewProductsPurchaser",{productData:foundItems});
  }
  else
  console.log(err);
});
  })
})

app.get('/here/:serialID1/:sourceManufacture/:destinationManufacture/:serialID2/:sourceDistributor/:destinationDistributor',function(req,res){
console.log("here");
  serialID1=req.params.serialID1;
serialID2=req.params.serialID2;
sourceManufacture=req.params.sourceManufacture;
destinationManufacture=req.params.destinationManufacture;
sourceDistributor=req.params.sourceDistributor;
destinationDistributor=req.params.destinationDistributor;
 var ans=1;
 console.log(serialID1);
 console.log(serialID2);
if(serialID1 != serialID2){
ans=0;
}
if(sourceDistributor != destinationManufacture)
ans=0;
console.log(ans);
res.render("qrData",{data:{serialID1:serialID1,serialID2:serialID2,sourceManufacture:sourceManufacture,destinationManufacture:destinationManufacture,sourceDistributor:sourceDistributor,destinationDistributor:destinationDistributor,ans:ans}});





})

app.get("/purchaserReview/:serialId",function(req,res){
serialID=req.params.serialId;
let tx;
let tx1;

async function ans() {

   tx=await ManufactureProductDetailsContract.getManufactureDetials(serialID);
  console.log("i am here*2");  
  console.log(tx);
  tx1=await ManufactureProductDetailsContract.getDistributorDetials(serialID);
  console.log("i am here*3");  
  console.log(tx1);
  uri='/here' + '/' + tx.serialID1 + '/' + tx.sourceManufacture + '/' + tx.destinationManufacture + '/' + tx1.serialID2 + '/' + tx1.sourceDistributor + '/' + tx1.destinationDistributor
  // res.redirect(uri);
  let data = {
    State1:"Manufacture",
    Serial_ID1:tx.serialID1,
    Source1:tx.sourceManufacture,
    Destination1:tx.destinationManufacture,
    State2:"Distributor",
    Serial_ID2:tx1.serialID2,
    Source2:tx1.sourceDistributor,
    Destination2:tx1.destinationDistributor
  };
  let stringdata = JSON.stringify(data);
  console.log(data);
  // QRCode.toString(stringdata,{type:'terminal'}, function (err, url) {
  //   if(err) return console.log("error occurred")
  //   console.log(url)
  stringdata="http://localhost:9001" + uri;
    QRCode.toDataURL(stringdata,function(err,url1){
      
      if(err)
      console.log(err);
      res.render("ProductDetailsToUser",{productData:url1});

    });
    
  // });
  
}
ans();
console.log("Comeee");
// let data = {
//   State:"Manufacture",
//   Serial_ID:tx.serialID1,
//   Source:tx.sourceManufacture,
//   Destination:tx.destinationManufacture,
//   State:"Distributor",
//   Serial_ID:tx1.serialID2,
//   Source:tx.sourceDistributor,
//   Destination:tx.destinationDistributor
// };
// let stringdata = JSON.stringify(data);
// QRCode.toString(stringdata,{type:'terminal'}, function (err, url) {
//   if(err) return console.log("error occurred")
//   console.log("url")

// });
});


app.listen(9001,function(req,res)
{
  console.log("Server started on port 9000");
//   async function main() {
//   const tx = await ManufactureProductDetailsContract.getManufactureDetials("SA123");
//   console.log(tx);
// }
// main();
})
