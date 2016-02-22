"use strict";

var frameModule = require("ui/frame");
var viewsModule = require("./views");

function navigateTo(navigationEntry) {
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}

function goBack() {
    var topmost = frameModule.topmost();
    topmost.goBack();
}

function goToFavourites(context) {
    navigateTo({
        moduleName: viewsModule.views.details,
        backstackVisible: true,
        context: context
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
