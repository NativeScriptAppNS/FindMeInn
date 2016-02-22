"use strict";

var Sqlite = require("nativescript-sqlite");
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
            
            global.db.execSQL("CREATE TABLE `Hotels` (`HotelId`	TEXT NOT NULL, `Hotel`	TEXT NOT NULL, `username` TEXT NOT NULL, PRIMARY KEY(HotelId))"); 
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
