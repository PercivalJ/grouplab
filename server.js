//DECLARING VARIABLES
//===================
var mongoose   = require( 'mongoose' );
var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var app        = express();

//SETTING LOCATION OF DATABSE
//===========================
mongoose.connect( 'localhost:27017/group_lab' );

//APP CONFIGURATION
//=================
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );


//ROUTES
//========



//SERVER RUN CONFIG
//=================
