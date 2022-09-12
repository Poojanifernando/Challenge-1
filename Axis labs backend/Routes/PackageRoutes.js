const express = require('express');
//import getRequestedPackages from the PackageController
const  {getRequestedPackages}  = require('../Controller/PackageController');

//Router() function is used to create a new router object to handle requests.
const router = express.Router();


//setup the routes to get request
router.get("/get-package",getRequestedPackages)



module.exports = router;