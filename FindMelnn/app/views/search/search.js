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

exports.navigatingTo = navigatingTo;
exports.findButtonTap = findButtonTap;