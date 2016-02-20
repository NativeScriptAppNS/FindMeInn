var detailsViewModelModule = require("./details-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new detailsViewModelModule.DetailsViewModel();
    page.bindingContext = viewModel;
}

function reviewsButtonTap(args) {
    viewModel.goToReviews();
}

function amenitiesButtonTap(args) {
	viewModel.goToAmenities();
}

exports.navigatingTo = navigatingTo;
exports.reviewsButtonTap = reviewsButtonTap;
exports.amenitiesButtonTap = amenitiesButtonTap;