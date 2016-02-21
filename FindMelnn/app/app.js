var application = require("application");
var usersServices = require("./services/users");
var viewsModule = require("./common/views");
 var dbModule = require("./common/dbContext");
 var hotelsServices = require("./services/hotels");
// var dbModule = require("./common/dbContext");
var applicationSettingsModule = require("application-settings");

 dbModule.dbInit();
// hotelsServices.hotels.addHotel();
// hotelsServices.hotels.getAll();
// hotelsServices.hotels.removeHotel("1");
// hotelsServices.hotels.getAll();
// console.log("here");

application.cssFile = "./app.css";

application.onLaunch = function(context) {
    if (usersServices.users.isSignedIn) {
        application.mainModule = viewsModule.views.search;
    } else {
        application.mainModule = viewsModule.views.signin;
    }
};

application.start();
