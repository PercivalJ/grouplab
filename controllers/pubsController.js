//PUBS CONTROLLER
//================


//DECLARING VARIABLES
//===================
var Pub 	= require( '../models/pub.js' )


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
function create(req, res){
	var pub = new Pub()
	pub.name = req.body.name
	pub.location = req.body.location;
	//Save function and error check
	pub.save(function(err){
		if (err)
			res.send(err);

		res.json({ message: 'Pub Added! Let us drink!' });
	})
}

	//SHOW
function show(req, res){
	Pub.findById(req.params.pub_id, function(err, pub){
		if (err)
			res.send(err);
		res.json(pub);
	})
}


	//UPDATE
function update(req, res){
	Pub.findById(req.params.pub_id, function(err, pub){
		if (err)
			res.send(err);
		pub.name = req.body.name    //updates pub info
		//save the pub
		pub.save(function(err){
			if (err)
				res.send(err)
			res.json({ message: 'Updated the Pub! Cheers' })
		})
	})
}

	//DESTROY - never destroy a pub in real life. that's sad.
function destroy(req, res){
	Pub.remove({
		_id: req.params.pub_id
	}), function(err, pub) {
		if (err)
			res.send(err)
		res.json({ message: 'Pub was sadly deleted' })
	} 
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