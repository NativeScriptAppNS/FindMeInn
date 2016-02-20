var searchViewModelModule = require("./search-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new searchViewModelModule.SearchViewModel();
    page.bindingContext = viewModel;
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