//USER ROUTES
//===========

//DECLARING VARIABLES
//===================
var express         = require( 'express' );
var apiRouter       = express.Router();
var usersController = require( '../controllers/usersController.js' );
var User            = require( '../models/user.js' );


//ROUTING FUNCTIONS
//=================
apiRouter.route( '/users' )
	.get( usersController.index )
	.post( usersController.create );
	
apiRouter.route( '/users/:user_id' )
	.get( usersController.show )
	.patch( usersController.update )
	.delete( usersController.destroy );

//EXPORT FUNCTIONS
//================
module.exports = apiRouter;