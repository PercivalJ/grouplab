//DECLARING VARIABLES
//===================
var mongoose   = require( 'mongoose' );
var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var app        = express();
var apiRouter  = require('./routes/userRoutes' );
var DB         = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/group_lab';
var port       = process.env.PORT || 3000;

//SETTING LOCATION OF DATABSE
//===========================
mongoose.connect( DB );

//APP CONFIGURATION
//=================
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );


//ROUTES
//========
app.use('/api', apiRouter );


//SERVER RUN CONFIG
//=================
app.listen( port );
console.log("server is running on port " + port );