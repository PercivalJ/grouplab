//USERS CONTROLLER
//================

//DECLARING VARIABLES
//===================
var User = require( '../models/user.js' );


//CRUD FUNCTIONS
//==============
//Finds all user objects
function index( req, res ) {
	User.find( function( err, users ) {
		if ( err ) {
			res.json( "Uh oh" + err );
		} else {
			res.json( users );
		}
	} );
};

//Creates a new User
function create( req, res ) {
	console.log( "In the function");
	var user = new User( req.body );
	user.save( function( err ) {
		console.log( "User saved ")
		if ( err ) {
			console.log( "Error happened")
			res.json( "Uh oh " + err );
		} else {
			console.log( "It should work now")
			res.json( user );
		}
	} );	
};

//Sends back a user's info
function show( req, res ) {
	console.log( "In the show function" );
	User.find( { _id: req.params.user_id.toString() }, function( err, user ) {
		if ( err ) {
			console.log( "Hmm error" );
			res.json( "Uh oh " + err );
		} else {
			console.log( "Yay it worked" + user );
			res.json( user );
		}
	} );
};

//Updates user information
function update( req, res ) {
	console.log( "In the update function" );
	User.find( req.params.user_id, function( err, user ) {
		if ( err ) {
			console.log( "Error thrown" );
			res.json( "Hmmm.." + err );
		} else {
			console.log( "Yay it worked");
			res.json( user );
		}
	} );
};

//Deletes a user
function destroy( req, res ) { 
	console.log( "In the delete function" );
	User.find( req.params.user_id, function( err, user ) {
		if ( err ) {
			console.log( "Deletion error" );
			res.json( "Error " + err );
		} else {
			console.log( "Yay!" );
			res.json( user );
		}
	} );
};



//EXPORT FUNCTIONS
//================
module.exports = {
	index: index
	,create: create
	,update: update
	,show: show
	,destroy: destroy
};