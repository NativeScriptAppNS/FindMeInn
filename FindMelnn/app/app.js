var application = require("application");
var usersServices = require("./services/users");
var viewsModule = require("./common/views");
// var dbModule = require("./common/dbContext");

// dbModule.dbInit();

application.cssFile = "./app.css";

application.onLaunch = function(context) {
    if (usersServices.users.isSignedIn) {
        application.mainModule = viewsModule.views["details"];
    } else {
        application.mainModule = viewsModule.views["details"];
    }
};

application.start();
