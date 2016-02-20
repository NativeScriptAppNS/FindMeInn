var searchViewModelModule = require("./search-view-model");
var applicationSettingsModule = require("application-settings");
var view = require("ui/core/view");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new searchViewModelModule.SearchViewModel();
    viewModel.minSlider = view.getViewById(page, "minSlider");
    viewModel.maxSlider = view.getViewById(page, "maxSlider");
    page.bindingContext = viewModel;
}

function pageLoaded() {
    //TODO: fix this, shows every time even when we back from result view
    
    var username = applicationSettingsModule.getString("username");
    viewModel.showInfo("Hallo " + username + '!');
}

function findButtonTap(args) {
    viewModel.find();
}

function settingsButtonTap() {
	viewModel.goToSettings();
}

function favButtonTap() {
	viewModel.goToFavourites();
}

exports.navigatingTo = navigatingTo;
exports.findButtonTap = findButtonTap;
exports.favButtonTap = favButtonTap;
exports.pageLoaded = pageLoaded;
exports.settingsButtonTap = settingsButtonTap;
