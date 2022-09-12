
const  test1  = require('../Controller/PackageController');

describe("Get request", () => {
    test1("Get request", async() => {
        const response = await request(app).get("/npm-package/get-package?packagename=express")
      expect(response.status).toEqual(200);
      expect(response.body.data).toEqual("packagename = express");
    });
  })