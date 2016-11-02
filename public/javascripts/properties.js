'use strict';

function Properties() {
  this.properties= [["address: 1 Drury Lane", "email: Timmy@gmail.com"],["address: the Meadows", "liz@mahon.com"]];
};

// Business logic methods

Properties.prototype.listAvailableProperties = function () {
  return this.properties
};
