//PUB ROUTES
//==========


//DECLARING VARIABLES
//===================
var express 			= require( 'express' );
var apiRouter 			= express.Router();
var pubsController 		= require( '../controllers/pubsController' );
var Pub 				= require( '../models/Pub' );


//ROUTING FUNCTIONS
//=================

//middleware
apiRouter.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
}); //test route to see if things are working
apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//index get for api router 
apiRouter.route( '/pubs' )
	.get(pubsController.index)
	.post(pubsController.create);

//get, update, delete specific pub_id
apiRouter.route( '/pubs/:pub_id' )
	.get(pubsController.show)        
	.put(pubsController.update)
	.delete(pubsController.destroy);




//EXPORT FUNCTIONS
//================
module.exports = apiRouter;