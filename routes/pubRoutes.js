//PUB ROUTES
//==========


//DECLARING VARIABLES
//===================
var express 			= require( 'express' )
var apiRouter 			= express.router()
var pubsController 		= require( '../controllers/pubsController' )
var Pub 				= require( '../models/Pub' )


//ROUTING FUNCTIONS
//=================
apiRouter.use(function(req,res,next){
	// if not 
})

//index get for api router 
apiRouter.route( '/pubs' )
	.get(pubsController.index)
	.post(pubsController.create)

//get, update, delete specific pub_id
apiRouter.route( '/pubs/:pub_id' )
	.get(pubsController.show)        
	.put(pubsController.update)
	.delete(pubsController.destroy)




//EXPORT FUNCTIONS
//================
module.exports = apiRouter