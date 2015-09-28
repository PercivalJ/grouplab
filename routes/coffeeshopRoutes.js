//COFFEESHOP ROUTES
//==========


//DECLARING VARIABLES
//===================
var express 			= require( 'express' )
var apiRouter 			= express.Router()
var coffeeshopsController 		= require( '../controllers/coffeeshopsController.js' )
var Coffeeshop				= require( '../models/coffeeshop.js' )


//ROUTING FUNCTIONS
//=================

//index get for api router 
apiRouter.route( '/coffeeshops' )
	.get(coffeeshopsController.index)
	.post(coffeeshopsController.create);

//get, update, delete specific pub_id
apiRouter.route( '/coffeeshops/:coffeeshop_id' )
	.get(coffeeshopsController.show)        
	.put(coffeeshopsController.update)
	.delete(coffeeshopsController.destroy)



//EXPORT FUNCTIONS
//================
module.exports = apiRouter;