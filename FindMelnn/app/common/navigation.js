"use strict";

var frameModule = require("ui/frame");
var viewsModule = require("./views");
var hotelsServices = require("../services/hotels");

function navigateTo(navigationEntry) {
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}

function goBack() {
    var topmost = frameModule.topmost();
    topmost.goBack();
}

function goToFavourites() {
    hotelsServices.hotels.getAll().then(
        function (hotels) {
            navigateTo({
                moduleName: viewsModule.views.result,
                backstackVisible: true,
                context: hotels
            });
        }, 
        function (e) {
            console.error(e.message);
        });
}
    
function goToSettings() {
    navigateTo({
        moduleName: viewsModule.views.settings,
        backstackVisible: true
    });
}

exports.navigateTo = navigateTo;
exports.goBack = goBack;
exports.goToSettings = goToSettings;
exports.goToFavourites = goToFavourites;
