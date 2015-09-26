//DECLARING VARIABLES
//===================
var mongoose   = require( 'mongoose' );
var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var app        = express();
var apiRouter  = require('./routes/userRoutes' );

//SETTING LOCATION OF DATABSE
//===========================
mongoose.connect( 'localhost:27017/group_lab' );

//APP CONFIGURATION
//=================
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );


//ROUTES
//========
app.use('/api', apiRouter );


//SERVER RUN CONFIG
//=================
app.listen(3000)
console.log("server is running on port 3000")