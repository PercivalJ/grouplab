//PUBS CONTROLLER
//================


//DECLARING VARIABLES
//===================
var Pub 	= require( '../models/pub.js' )


//CRUD FUNCTIONS
//==============

	//INDEX
function index( req, res ){
	console.log( "In pubs index")
	Pub.find(function( err , pubs ){
		if( err ) {
			res.json( "Error in pubs " + err );
		} else {
			res.json(pubs)
		}
	} );
}
	//CREATE
function create(req, res){
	var pub = new Pub()
	pub.name = req.body.name
	pub.location = req.body.location;
	//Save function and error check
	pub.save(function(err){
		if (err) {
			res.json( err );
		} else {
			res.json({ message: 'Pub Added! Let us drink!' });
		}
	})
}

	//SHOW
function show(req, res){
	Pub.findById(req.params.pub_id, function(err, pub){
		if (err) {
			res.json( err );
		} else {
			res.json(pub);
		}
	})
}


	//UPDATE
function update(req, res){
	Pub.findById(req.params.pub_id, function(err, pub){
		if ( err ) {
			console.log( "Error thrown" );
			res.json( "Hmmm.." + err );
		} else {
			console.log( "Yay it worked");
			res.json( pub );
		}
	})
}

	//DESTROY - never destroy a pub in real life. that's sad.
function destroy(req, res){
	Pub.findById( req.params.pub_id, function( err, pub ) {
		if ( err ) {
			console.log( "Error thrown" );
			res.json( "Hmmm.." + err );
		} else {
			console.log( "Yay it worked");
			res.json( pub );
		}
	} );
}



//EXPORT FUNCTIONS
//================
module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
};