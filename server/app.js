/**
 *Contains all endpoints for the express api server.
 */
 const cors = require('cors');
const express = require('express');
const app = express();
const Properties =  require('./db/mockdata');


/**
 * Express middleware that parses the incoming request object.
 * It is used to create a JS object that we can interact with.
 * It is really only used for POST and PUT requests, not GETS.
 */
app.use(express.json());

/**
 * Cors middleware to allow cross origin requests
 */
app.use(cors());




//Send mock properties to the client as a JSON object, data
app.get("/", (req, res)=>{
  try{
      //log the properties to the console for testing purposes
      console.log(Properties);
      //status code 200 is ok
      res.status(200).json({
      status: "success", 
      data: {
        allProperties: Properties
      }
  })
  }
  catch(err){
      console.log(err);
  }
});
  
module.exports = app;