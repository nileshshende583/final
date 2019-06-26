var express = require('express');
var app = express();

var customer = function(req,res){

var Information = [
{empId:1,empName:"Dinesh singh",AccountNo:1001,role:"manager"},
{empId:2,empName:"Nagesh Chauhan",AccountNo:1002,role:"headmanger"},
{empId:3,empName:"Gaurav sonawane",AccountNo:1003,role:"tester"},
{empId:4,empName:"Pramod Desai",AccountNo:1004,role:"developer"},
{empId:5,empName:"nilesh shende",AccountNo:1005,role:"worker"}
{empId:6,empName:"aniket joshi",AccountNo:1006,role:"architechture"}
];
  res.send(Information);
};
app.get ('/Information',customer);
var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Myserver is listening at http://localhost:5000", host, port)
})