//required express to create the server we want to run our application 
const express = require('express');

// required body-parser to converts the json request to a js object
//(as the json format cannot be understood by the server)
const bodyParser = require("body-parser");

//invoke the server (server- express application)
const app = express();


//middleware of the app 
app.use(bodyParser.json());

//middlewares of the route
const userRoutes = require('./Routes/PackageRoutes');
//using routes
app.use('/npm-package',userRoutes);

//declaring the runing PORT
const PORT = 8000;

//listening the running PORT
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})