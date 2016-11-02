'use strict';
module.exports = function(sequelize, DataTypes) {
  var Addreses = sequelize.define('Addreses', {
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Addreses;
};