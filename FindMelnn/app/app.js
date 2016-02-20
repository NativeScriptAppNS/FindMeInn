var application = require("application");
var usersServices = require("./services/users");
var viewsModule = require("./common/views");
// var dbModule = require("./common/dbContext");
var applicationSettingsModule = require("application-settings");

// dbModule.dbInit();

application.cssFile = "./app.css";

application.onLaunch = function(context) {
    if (usersServices.users.isSignedIn) {
        application.mainModule = viewsModule.views.search;
    } else {
        application.mainModule = viewsModule.views.signin;
    }
};

application.start();
