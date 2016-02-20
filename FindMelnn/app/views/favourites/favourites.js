var favouritesViewModelModule = require("./favourites-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new favouritesViewModelModule.FavouritesViewModel();
    page.bindingContext = viewModel;
}

function viewHotel(args) {
    viewModel.viewHotel();
}

exports.navigatingTo = navigatingTo;
exports.viewHotel = viewHotel;
