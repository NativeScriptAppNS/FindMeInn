var detailstViewModelModule = require("./result-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new detailstViewModelModule.DetailsViewModel();
    page.bindingContext = viewModel;
}

// function viewHotel(args) {
//     viewModel.viewHotel();
// }

exports.navigatingTo = navigatingTo;
exports.viewHotel = viewHotel;