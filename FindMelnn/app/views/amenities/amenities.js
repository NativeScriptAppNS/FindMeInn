var amenitiesViewModelModule = require("./amenities-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new amenitiesViewModelModule.AmenitiesViewModel();
    viewModel.amenities = args.context;
    page.bindingContext = viewModel;
}

exports.navigatingTo = navigatingTo;