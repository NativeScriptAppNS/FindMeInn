var frameModule = require("ui/frame");

function navigateTo(navigationEntry) {
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}

function goBack() {
    var topmost = frameModule.topmost();
    topmost.goBack();
}

exports.navigateTo = navigateTo;
exports.goBack = goBack;