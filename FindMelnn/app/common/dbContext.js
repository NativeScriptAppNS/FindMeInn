var Sqlite = require( "nativescript-sqlite");

exports.dbInit = function () {

 //    if (Sqlite.exists("MyTable")) {
 //  		Sqlite.deleteDatabase("MyTable");
 //  		console.log("deleted");
	// }



   var db_promise = new Sqlite("MyTable.sqlite", function(err, db) {
	    if (err) { 
	      console.error("We failed to open database", err);
	    } else {
	      // This should ALWAYS be true, db object is open in the "Callback" if no errors occurred 
	      console.log("Are we open yet (Inside Callback)? ", db.isOpen() ? "Yes" : "No"); 
	      global.db = db;
	    }

	    global.db.execSQL("CREATE TABLE `Hotels` (`HotelId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Hotel`	TEXT NOT NULL );"); 

		console.log("table created"); 
	});  
	
};