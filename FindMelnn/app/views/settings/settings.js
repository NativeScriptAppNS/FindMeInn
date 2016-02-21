var settingsViewModelModule = require("./settings-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new settingsViewModelModule.SettingsViewModel();
    page.bindingContext = viewModel;
}

function signuotButtonTap(args) {
    viewModel.signout();
}

exports.navigatingTo = navigatingTo;
exports.signuotButtonTap = signuotButtonTap;
