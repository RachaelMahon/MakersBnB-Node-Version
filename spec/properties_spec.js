require ("../bin/www")
require('../node_modules/jasmine-node')
var request = require("request");
var base_url = "http://localhost:3000";
// require("../public/javascripts/properties.js");
function Properties() {
  this.properties= [["address: 1 Drury Lane", "email: Timmy@gmail.com"],["address: the Meadows", "liz@mahon.com"]];
}

describe("Makers BNB server test", function() {

  describe("GET /", function(){
    it("returns statues code 200", function(done){
        var properties = new Properties();
        console.log("Hi Hi 1");
        console.log("Hi Hi 2");
        expect(properties.properties).toEqual([["address: 1 Drury Lane", "email: Timmy@gmail.com"],["address: the Meadows", "liz@mahon.com"]]);
        done();
      });
    });
});
