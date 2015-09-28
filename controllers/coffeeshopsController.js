//COFFEESHOPS CONTROLLER
//================


//DECLARING VARIABLES
//===================
var Coffeeshop 	= require( '../models/coffeeshop' )

//CRUD FUNCTIONS
//==============

	//INDEX
function index (req, res){
	console.log( "coffee Index function")
	Coffeeshop.find( function( err, coffeeshops ) {
		if( err ) {
			res.json( "uh oh " + err )
		} else {
			res.json ( coffeeshops )
		}
	} );
};

	//CREATE
function create(req, res){
	var coffeeshop = new Coffeeshop() 
	coffeeshop.name = req.body.name
	coffeeshop.location = req.body.location;
	//Save function and error check 
	coffeeshop.save(function(err){
		if (err) {
			res.json ( err )
		} else {
			res.json({ message: "Coffeeshop saved. Sober up"})
		}
	})
}

	//SHOW 
function show(req, res){
	Coffeeshop.findById( req.params.coffeeshop_id.toString(), function( err, coffeeshop ) {
		if (err) {
			console.log("error");
			res.json("error " + err);
		} else {
			console.log("successful" + coffeeshop);
			res.json( coffeeshop );

		}
	} ); 
};

//Updates coffeeshop info 
function update( req, res ){
	console.log( "update function ");
	Coffeeshop.find( req.params.coffeeshop_id, function( err, coffeeshop ){
		if ( err ) {
			console.log( "error");
			res.json( coffeeshop );
		}
	});
};

//Deletes a coffeeshop 
function destroy( req, res ) {
	console.log(" delete function ");
	Coffeeshop.find( req.params.coffeeshop_id, function( err, coffeeshop){
		if ( err ) {
			console.log( "cannot delete ");
			res.json( "error " + err );
		} else {
			console.log(" success ");
			res.json( coffeeshop );
		}
	});
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
