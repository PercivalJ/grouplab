//PUBS CONTROLLER
//================


//DECLARING VARIABLES
//===================
var Pub = require("../models/pub")


//CRUD FUNCTIONS
//==============

	//INDEX
function index( req, res ){
	Pub.find(function(err,pubs){
		if( err ) res.send( err )
			res.json(pubs)
	})
}
	//CREATE
function create(req, res)
	var pub = new Pub()
	pub.name = req.body.name
	pub.location = req.body.location

//EXPORT FUNCTIONS
//================