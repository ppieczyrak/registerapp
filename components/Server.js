var express = require("express")

var app = express()
var dane=[]
app.use(express.json());

const PORT = 3000;

app.post("/posthethod", function (req, res) {
    var flag = false
    console.log(req.body,"")
    dane.forEach((item)=>{
        if(item.username==req.body.username) flag= true
    })
    console.log(flag,"flaga")
    if(flag){
        res.send(false)
        console.log(dane)
    }
    else {
    dane.push(req.body)
    console.log(dane)
    res.send(dane)}
})
app.post("/getdata", function (req, res) {
    
    res.send(dane)
})

app.post("/delete", function (req, res) {
    
    console.log(req.body.username,"srv")
    dane.forEach((item,index)=>{
        console.log(item.username,"itemuser")
        if(item.username==req.body.username){
            
            dane.splice(index,1);
            console.log(dane)
        }
    })
    res.send(dane)
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
