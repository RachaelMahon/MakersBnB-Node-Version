require ("../bin/www")
var request = require("request");
//var helloWorld = require('../routes/index.js')
var base_url = "http://localhost:3000"



describe("Makers BNB server test", function() {
  describe("GET /", function(){
    console.log("Started2!")
    it("returns statues code 200", function(done){
      request.get("http://localhost:3000", function(error, response, body) {
        console.log("Started3!")
        //console.log(response)
        expect(response.statusCode).toBe(200);

        done();
      });
    });
  });
});
