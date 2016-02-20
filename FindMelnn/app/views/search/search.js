var searchViewModelModule = require("./search-view-model");
var applicationSettingsModule = require("application-settings");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new searchViewModelModule.SearchViewModel();
    page.bindingContext = viewModel;
}

function pageLoaded() {
    // TODO fix this
    var username = applicationSettingsModule.getString("username");
    viewModel.showInfo("Hallo " + username + '!');
}

function findButtonTap(args) {
    viewModel.find();
}

function favButtonTap() {
	console.log('HERE');
	viewModel.goToFavourites();
}

exports.navigatingTo = navigatingTo;
exports.findButtonTap = findButtonTap;
exports.favButtonTap = favButtonTap;
exports.pageLoaded = pageLoaded;
