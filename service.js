var express=require('express');
var app=express();

var employeeController=function(req,res)
{
console.log("rest api");
  var employee=[ //employee data in json format
  
            {firstName:'Vrasha',lastName:'Magdum',age:22,designation:'Jr. engg'},
            {firstName:'Dhanshri',lastName:'Deshmukh',age:22,designation:'Jr. engg'},
			{firstName:'Priya',lastName:'Shintre',age:22,designation:'Jr. engg'},
			{firstName:'Komal',lastName:'Gupta',age:23,designation:'Sr. engg'},
      ];
  res.send(employee);
};

app.get('/employee',employeeController );

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})