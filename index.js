const bodyParser=require("body-parser");
const ejs=require("ejs");
const express=require("express");
const app=express();
var cookieParser = require('cookie-parser')
const { spawn } = require('child_process');
const Session=require("express-session");
var LocalStrategy = require('passport-local').Strategy;
const mongoose=require("mongoose");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const country={'Albania': 5940.830501483217, 'Algeria': 7758.777324519019, 'Andorra': 7471.909622514216, 'Anguilla': 14050.988815935965, 'Antigua and Barbuda': 14042.410697290496, 'Argentina': 15943.888517059571, 'Armenia': 3877.2386378447472, 'Aruba': 15021.93245310151, 'Australia': 7821.93504610961, 'Austria': 6437.2690084331625, 'Azerbaijan': 3685.3700129226027, 'Bahamas': 14349.842888587034, 'Bahrain': 2950.7877434356765, 'Bangladesh': 1223.6495688740326, 'Barbados': 14141.459105695516, 'Belarus': 5654.0790566159685, 'Belgium': 7179.1445877214655, 'Belize': 15613.40043861426, 'Benin': 8273.17253602289, 'Bermuda': 12992.708927452908, 'Botswana': 7587.8395144114265, 'Brazil': 14791.338117617108, 'Bulgaria': 5523.1107203328165, 'Burkina Faso': 8569.88871890284, 'Burundi': 5979.058350020927, 'Cambodia': 2912.481967463635, 'Cameroon': 7298.161980608996, 'Canada': 11481.27861908652, 'Chile': 16709.871471843813, 'China': 2987.0268662055205, 'Colombia': 15989.233629302104, 'Costa Rica': 16165.263815906956, 'Croatia': 6370.573764795454, 'Cuba': 14709.928482993446, 'Cyprus': 4717.4551397224195, 'Denmark': 6862.215943400846, 'Dominica': 14131.857834322213, 'Ecuador': 16792.763913743536, 'Egypt': 4928.892312048945, 'El Salvador': 15984.816344759396, 'Estonia': 6015.05366803307, 'Ethiopia': 4317.817810855819, 'Fiji': 11716.501203824399, 'Finland': 6117.728406765914, 'France': 7376.85343561285, 'French Polynesia': 14957.242205889292, 'Gabon': 7700.5522006561505, 'Gambia': 9929.505014596525, 'Georgia': 4108.655996610187, 'Germany': 6759.4724212661995, 'Ghana': 8670.03240954615, 'Greece': 5785.358640021273, 'Greenland': 8862.961726017837, 'Grenada': 14380.099921011326, 'Guadeloupe': 14068.465041011536, 'Guatemala': 15818.502114078035, 'Guinea': 9492.773012463913, 'Guyana': 14634.275900796129, 'Honduras': 15736.356318290489, 'Hungary': 6061.630165259222, 'Iceland': 8316.552254387943, 'Indonesia': 4489.865857623741, 'Iran': 2830.816134923425, 'Iraq': 3751.329974201085, 'Ireland': 8010.61749102131, 'Israel': 4539.349768421734, 'Italy': 6576.131407010513, 'Jamaica': 15009.493930125105, 'Japan': 5965.749615527546, 'Jordan': 4403.436609592473, 'Kazakhstan': 3238.451579019662, 'Kenya': 5021.610329581677, 'Kuwait': 3310.2723651200954, 'Kyrgyzstan': 2328.2682624037193, 'Latvia': 5972.742400726293, 'Angola': 7562.637847132184, 'Bhutan': 1396.2719896332246, 'Comoros': 5273.689416465614, 'Eritrea': 4184.22031713071, 'Djibouti': 3998.751043001094, 'French Guiana': 14137.240102858932, 'Guinea-Bissau': 9981.731351681072, 'Haiti': 14630.587696308377, 'Lebanon': 4477.189590754617, 'Lesotho': 7796.538234403202, 'Lithuania': 5955.8220382593045, 'Luxembourg': 7062.808628106487, 'Madagascar': 5607.855474436542, 'Malawi': 6170.000163741371, 'Malaysia': 3087.4651411540735, 'Maldives': 2033.5707830359725, 'Mali': 8632.585230237535, 'Malta': 6442.998828223073, 'Martinique': 14160.611331606424, 'Mauritius': 5119.252006992558, 'Mayotte': 5245.69354986391, 'Mexico': 15110.503736653603, 'Mongolia': 3689.350926476638, 'Montenegro': 6019.002541683737, 'Montserrat': 14097.032613830625, 'Morocco': 8472.316169080694, 'Mozambique': 6444.830605606456, 'Namibia': 8157.767170979939, 'Nepal': 1013.2702333993229, 'Netherlands': 7118.113497514438, 'New Caledonia': 10493.878457331617, 'New Zealand': 11983.86098577333, 'Nicaragua': 15928.955444626128, 'Niger': 7403.272113766815, 'Nigeria': 7619.582831123873, 'Norway': 6969.000847635023, 'Oman': 2393.507732187754, 'Pakistan': 1454.4289875292548, 'Palau': 6149.678553051677, 'Panama': 16108.578957760898, 'Papua New Guinea': 7706.290734912709, 'Paraguay': 15645.446539430499, 'Peru': 16969.664292822465, 'Philippines': 4630.263130548337, 'Poland': 6172.33024453659, 'Portugal': 8349.054719020995, 'Qatar': 2890.3590677467137, 'Romania': 5626.823035461688, 'Rwanda': 5908.010979005497, 'Saint Kitts and Nevis': 14096.088381560945, 'Saint Lucia': 14210.030131412619, 'Saint Vincent and the Grenadines': 14302.08756946513, 'Samoa': 12494.763683821126, 'Saudi Arabia': 3502.1802233269823, 'Senegal': 9801.09290820227, 'Serbia': 5901.63220405551, 'Seychelles': 3806.891768133141, 'Sierra Leone': 9764.81930482494, 'Singapore': 3447.388002193133, 'Slovakia': 6071.553455062051, 'Slovenia': 6393.24392226492, 'South Africa': 8263.98773132219, 'Spain': 7950.225598934863, 'Sri Lanka': 1429.3280250029518, 'Sudan': 5248.501618208931, 'Suriname': 14416.545001988681, 'Swaziland': 7332.234614039594, 'Sweden': 6411.408967708038, 'Switzerland': 6913.360115584067, 'Syria': 4210.678761060316, 'Thailand': 2385.506593904534, 'Timor-Leste': 6077.78591457731, 'Togo': 8453.147861036228, 'Tonga': 12403.04791804032, 'Trinidad and Tobago': 14458.568054165828, 'Tunisia': 6903.467926552873, 'Turkey': 4636.180876944078, 'Uganda': 5500.750046192955, 'Ukraine': 5243.903142987267, 'United Arab Emirates': 2607.705859286377, 'United Kingdom': 7670.901265264174, 'Uruguay': 15375.18456269093, 'Vanuatu': 10412.234687212993, 'Venezuela': 15216.578562864515, 'Yemen': 3265.3984505637936, 'Zambia': 6735.016570859557, 'Zimbabwe': 6994.610599241782, 'Afghanistan': 1853.5575979036626, 'Kiribati': 12471.736656230933, 'Mauritania': 9202.556942961219, 'Libya': 6278.679970230969};
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
mongoose.connect("mongodb+srv://Token360:NAMANjaypee62@cluster0.ctbm1h1.mongodb.net/hackathon?retryWrites=true&w=majority"
).then(()=>console.log("Database Connection Success")).catch((h)=>console.log(h));
var curId="";
const Schema=mongoose.Schema;
const shipSchema = new Schema({
    warehouse_id:String,
    name:String,
    price:Number,
    quantity:Number,
    location:String
    });
const warehouseItemSchema = new Schema({
    warehouse_id:String,
    name:String,
    price:Number,
    quantity:Number
    });


    const manufactureSchema = new Schema({
        username:String,
        password:String
        });
        manufactureSchema.plugin(passportLocalMongoose);
        const distributorSchema = new Schema({
         username:String,
         password:String
         });
        const purchaserSchema = new Schema({
         username:String,
         password:String
         });
         const warehouseSchema = new Schema({
            manufacture_id:String,
            location:String,
            capacity:Number
         })
         const Manufacture=new mongoose.model("manufactureUser",manufactureSchema);
         const warehouse = new mongoose.model("warehouse",warehouseSchema);
         const shipItem = new mongoose.model("ship",shipSchema);
         const warItem = new mongoose.model("warItem",warehouseItemSchema);
         passport.use('manufact', new LocalStrategy(Manufacture.authenticate())); 

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

app.get("/",function(req,res){
    res.render("home");
});

app.get("/manufacture",function(req,res){
    res.render("manufacture_in");
})

app.get("/loginManu",function(req,res){
    res.render("manu_login");
})

app.get("/registerManu",function(req,res){
    res.render("manu_register");
})
app.post("/registerManu",function(req,res){
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
})

app.post("/manu_login",function(req,res){
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
})

app.get("/addWarehouse",function(req,res){
    res.render("addWarehouse");
})

app.post("/addWarehouse",function(req,res){
    var location = req.body.location;
    var capacity = req.body.capacity;
    const war = new warehouse({
        manufacture_id:curId,
        location:location,
        capacity:capacity
    })
    war.save();
    res.render("manufactureHome")
})


app.get("/addItems",function(req,res){
    console.log("Hello")
    warehouse.find({manufacture_id:curId}, function ( err,foundItems) {
        console.log(foundItems);
        res.render("addItems",{productData:foundItems});
      });
})
app.get("/updateItems",function(req,res){
    console.log("Hello")
    warehouse.find({manufacture_id:curId}, function ( err,foundItems) {
        console.log(foundItems);
        res.render("updateItems",{productData:foundItems});
      });
})

app.get("/add_item/:id_of_item",function(req,res){
    
    const id_of_item=req.params.id_of_item;
    console.log(id_of_item)
res.render("item_add",{id_of_item:id_of_item})
})

app.get("/dataAnalytics",function(req,res){
    warehouse.find({manufacture_id:curId}, function ( err,foundItems) {
        console.log(foundItems);
        res.render("dataAnalytics",{productData:foundItems});
      });
})

app.get("/update_item/:id_of_item",function(req,res){
    
    const id_of_item=req.params.id_of_item;
    console.log(id_of_item)
res.render("item_update",{id_of_item:id_of_item})
})


app.post("/add_item1/:id_of_item",function(req,res){
     console.log("yO")
    // console.log(req.params.id_of_item);
    var name=req.body.name;
    var price = req.body.price;
    var quantity = req.body.quantity;
    const item = new warItem({
        warehouse_id:req.params.id_of_item,
        name:name,
        price:price,
        quantity:quantity
    })
    item.save();
})

app.post("/update_item1/:id_of_item",function(req,res){
    console.log("---I am here--");
    console.log(req.params.id_of_item);
    var name=req.body.name;
    var price = req.body.price;
    var quantity = req.body.quantity;
    const item = new warItem({
        warehouse_id:req.params.id_of_item,
        name:name,
        price:price,
        quantity:quantity
    })
    console.log(item)
    var myquery = { name: name };
    var newvalues = { $set: {name: name, price:price,quantity:quantity,warehouse_id:req.params.id_of_item } };
    warItem.updateOne(myquery,newvalues,function(err,res){
        if(err)
        console.log(err)
    })
    res.render('manufactureHome');
})

app.get("/ship",function(req,res){
    warehouse.find({manufacture_id:curId}, function ( err,foundItems) {
        console.log(foundItems);
        res.render("ship",{productData:foundItems});
      });
});
app.get("/ship_item/:id_of_item",function(req,res){
    
    const id_of_item=req.params.id_of_item;
    console.log(id_of_item)
res.render("item_ship",{id_of_item:id_of_item,country:country})
})


app.post("/ship_item1/:id_of_item",async function (req,res){
    console.log("---I am here ship--");
    console.log(req.params.id_of_item);
    var name=req.body.name;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var location = req.body.choice;
console.log(name);
console.log(price);
console.log(quantity);
console.log(location);

    console.log("---Choice--");

//      warItem.find({ warehouse_id:req.params.id_of_item}, function(err,found){
//         console.log("feffef");
//   foundItems=found;
//      });
    const foundItems=await warItem.find({ warehouse_id:req.params.id_of_item});
    console.log("zzzzz",foundItems[0]);
    const item = new shipItem({
        warehouse_id:req.params.id_of_item,
        name:name,
        price:price,
        quantity:quantity,
        location:location
    })
    console.log(foundItems)
    console.log(item.name)
    item.save();

    var myquery = { warehouse_id:req.params.id_of_item };
    var quan = parseInt(foundItems[0].quantity)-parseInt(item.quantity);
    console.log("Hilo ",foundItems[0].quantity);
    console.log("Hi ",quan);
    var newvalues = { $set: {name: item.name, price:item.price,quantity:quan,warehouse_id:req.params.id_of_item } };
    warItem.updateOne(myquery,newvalues,function(err,res){
        if(err)
        console.log(err)
    })
    res.render("manufatureHome")
})

app.get("/predict",function(req,res){
    res.render("predict");
})

app.post("/predict",function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    console.log(`Volume entered: ${name}`);
    console.log(`Quantity entered: ${email}`);
    console.log(`Country selected: ${gender}`);
    const pythonProcess = spawn('cmd.exe', ['/c', 'python', 'Price_prediction.py', name, email, gender]);
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python script output: ${data}`);
      res.send(`Thank you,    ${data}`);
    });
  
})

app.get("/data_analytics/:id_of_item",function(req,res){
    
    const totals=[];
    const price=[];
    const location=[];
    const id_of_item=req.params.id_of_item;
    console.log(id_of_item)
    shipItem.find({warehouse_id:id_of_item}, function ( err,foundItems) {
        console.log(foundItems);
        foundItems.forEach(x => {
            const obj = totals.find(o => o.warehouse_id === x.warehouse_id && o.name === x.name);
            if (obj) {
                obj.price = obj.price + x.price;
                obj.quantity = obj.quantity + x.quantity;
            } else {
                totals.push(x);
            }
            });
            console.log(totals);
            totals.map((total)=>{
                console.log(total.price)
                price.push(total.price);
                location.push(total.location);
            })
        res.render("dataAnalytics1",{price:price,location:location});
      });


})

app.listen(10002,function(req,res)
{
  
   
  console.log("Server started on port 10002");
})

