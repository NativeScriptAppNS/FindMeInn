var detailsViewModelModule = require("./details-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new detailsViewModelModule.DetailsViewModel();
    page.bindingContext = viewModel;
}

exports.navigatingTo = navigatingTo;