var application = require("application");
var usersServices = require("./services/users");
var viewsModule = require("./common/views");
var dbModule = require("./common/dbContext");
var hotelsServices = require("./services/hotels");

application.cssFile = "./app.css";

application.onLaunch = function(context) {
    dbModule.dbInit();
    
    if (usersServices.users.isSignedIn) {
        application.mainModule = viewsModule.views.search;
    } else {
        application.mainModule = viewsModule.views.signin;
    }
};

application.start();
