/*jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");
const https =require('https');
const client = require("@mailchimp/mailchimp_marketing");
client.setConfig({
    apiKey: "17dcadd87266d22e1190a9047aaab5fd-us8",
    server: "us8",
  });
  

const app =express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.listen(3000,function(){
    console.log("server working on port 3000");
} );

async function run() {
    const response = await client.ping.get();
    console.log(response);
  }
  
  run();

  const listId = "fd8428fbd9";


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req,res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    console.log(firstName,lastName,email);
    const data = {
                email_address : email,
                status : "subscribed",
                merge_fields: { 
                    FNAME : firstName,
                    LNAME : lastName
                }
          
    };
        const jsonData = JSON.stringify(data);  
        const url = "https://us8.api.mailchimp.com/3.0/lists/fd8428fbd9/members";



async function run() {
    const response = await client.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    });
 
      
   
  }
  
  run();




});
