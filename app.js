// jshint esversion:6


const express = require('express');
const bodyParser = require('body-parser');
const {
    redirect
} = require('express/lib/response');
const date = require(__dirname + '/date.js');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
//app.set('views', __dirname+"/veiws");
app.set('view engine', 'ejs');
var newItems = [];
let workItems = [];

app.get("/", function (req, res) {


    let day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItem: newItems
    });
});
app.post("/", function (req, res) {

    var item = req.body.newItem;
    console.log(item);
    if (item !== "") {
        if (req.body.list === "workList") {
            workItems.push(item);
            res.redirect("/work");
        } else {
            newItems.push(item);
            res.redirect("/");
        }

    }




});

app.post("/delete", function (req, res) {
    newItems = [];
    res.redirect("/");
});
app.post("/deleteItem", function (req, res) {
   let index = req.body.buttonIndex;
   if (req.body.list === "workList") {
    workItems.splice(index,1);
    res.redirect("/work");
} else {
    newItems.splice(index,1);
    res.redirect("/");
}

   
});

app.listen(3000, function () {
    console.log("running on port 3000");
});


app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "workList",
        newListItem: workItems
    });

});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});