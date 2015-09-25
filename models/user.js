//USER MODEL
//==========


//DECLARING VARIABLES
//===================
var mongoose = require( 'mongoose' );
var bcrypt   = require( 'bcrypt-nodejs' );
var Schema   = mongoose.Schema;

//USER SCHEMA
//===========
var UserSchema = new Schema( {
	name: String,
	email: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true, select: false }
} );

//USER ACTIONS BEFORE SAVE
//========================
UserSchema.pre( 'save', function( next ) {
	var user = this;
	if ( !user.isModified( 'password' ) ) {
		return next();
	}
	
	bcrypt.hash( user.password, null, null, function( err, hash ) {
		if ( err ) {
			return next( err );
		}
		user.password = hash;
		next();
	} );
} );

//EXPORT SCHEMA
//=============
module.exports = mongoose.model( 'User', UserSchema );