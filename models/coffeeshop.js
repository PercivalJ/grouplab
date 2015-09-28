//COFFEESHOP MODEL
//==========


//DECLARING VARIABLES
//===================
var mongoose = require( 'mongoose');
var Schema = mongoose.Schema;


//PUB SCHEMA
//===========
var coffeeShopSchema = new Schema ({
	name: String,
	location: String
});

//EXPORT SCHEMA
//=============
module.exports  = mongoose.model( 'Coffeeshop', coffeeShopSchema );
