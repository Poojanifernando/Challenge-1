//required axios to use REST APIs
const axios = require('axios');

const getRequestedPackages = async (req, res) => { 

    //pass the package name as a query string 
    const Packagename = req.query.packagename;

    //declare packages name as variables
    var dependencies;
    var devDependencies;
    var url;
    var  homepage;
    var version;

    //get an console output as an array
    console.log(Packagename);

    //using error handling to get packages
    try {
         
        //set the url path to get packages using axios 
        let data = await axios.get("http://registry.npmjs.org/"+Packagename+"/latest");
        //console the output
        console.log(data?.data);

        //getting packages successfully
        if(data?.status == 200) 
        {
            devDependencies = data?.data?.devDependencies;
            dependencies = data?.data?.dependencies;
            url = data?.data?.repository?.url;
            homepage = data?.data?.homepage;
            version = data?.data?.version;
        }
        //if not packges are found
        else
        {
            res.status(404).json({data:"Package not found"});
        }
        var packagedetails = {
            packageName:Packagename,
            url:url,
            homepage:homepage,
            version:version,
            dependencies:dependencies,
            devDependencies:devDependencies,
        }
        res.status(200).json({data:packagedetails});
     //catch the error and display error message   
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports = {getRequestedPackages};
  