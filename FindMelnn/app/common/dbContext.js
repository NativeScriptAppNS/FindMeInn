"use strict";

var Sqlite = require( "nativescript-sqlite");
var constantsModule = require("./constants");

exports.dbInit = function () {
    //Sqlite.deleteDatabase(constantsModule.constants.favoritesdbname);    
        
    if (!Sqlite.exists(constantsModule.constants.favoritesdbname)) {
        return new Sqlite(constantsModule.constants.favoritesdbname, function(err, db) {
            if (err) { 
                console.error("We failed to open database", err);
            } else {
                global.db = db;
            }
            
            global.db.execSQL("CREATE TABLE `Hotels` (`HotelId`	TEXT NOT NULL, `Hotel` TEXT NOT NULL, PRIMARY KEY(HotelId))"); 
        });  
	} else {
        return new Sqlite(constantsModule.constants.favoritesdbname, function(err, db) {
            if (err) { 
                console.error("We failed to open database", err);
            } else {
                global.db = db;
            }
        });
    }
};



// hotelsServices.hotels.addHotel({
//     id: 1,
//     param: "pesho"
// });
// hotelsServices.hotels.addHotel({
//     id: 2,
//     param: "pesho2"
// });
// hotelsServices.hotels.addHotel({
//     id: 3,
//     param: "pesho3"
// });
// hotelsServices.hotels.addHotel({
//     id: 4,
//     param: "pesho4"
// });

    

//   hotelsServices.hotels.removeHotel(1).then(function () {
//       hotelsServices.hotels.getAll().then(function (hotels) {
//         console.log(hotels);
//     });
//   });
//hotelsServices.hotels.getAll();