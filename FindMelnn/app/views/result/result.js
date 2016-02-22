var resultViewModelModule = require("./result-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new resultViewModelModule.ResultViewModel();
    viewModel.hotels = args.context;
    // for (var key in args.context[0]) {
    //     console.log(key);
    // }
    page.bindingContext = viewModel;
}

function viewHotel(args) {
    viewModel.viewHotel();
}

exports.navigatingTo = navigatingTo;
exports.viewHotel = viewHotel;
