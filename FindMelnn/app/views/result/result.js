var resultViewModelModule = require("./result-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new resultViewModelModule.ResultViewModel();
    page.bindingContext = viewModel;
}

function viewHotel(args) {
    viewModel.viewHotel();
}

exports.navigatingTo = navigatingTo;
exports.viewHotel = viewHotel;
