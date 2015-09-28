//COFFEESHOP ROUTES
//==========


//DECLARING VARIABLES
//===================
var express 			= require( 'express' )
var apiRouter 			= express.Router()
var coffeeshopsController 		= require( '../controllers/coffeeshopsController' )
var Coffeeshop				= require( '../models/coffeeshop' )


//ROUTING FUNCTIONS
//=================
apiRouter.use(function(req,res,next){
	// if not 
})

//index get for api router 
apiRouter.route( '/coffeeshop' )
	.get(coffeeshopsController.index)
	.post(coffeeshopsController.create)

//get, update, delete specific pub_id
apiRouter.route( '/coffeeshop/:coffeeshop_id' )
	.get(coffeeshopsController.show)        
	.put(coffeeshopsController.update)
	.delete(coffeeshopsController.destroy)



//EXPORT FUNCTIONS
//================
module.exports = apiRouter;