var detailsViewModelModule = require("./details-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new detailsViewModelModule.DetailsViewModel();
    viewModel.hotel = args.context;
    page.bindingContext = viewModel;
}

function reviewsButtonTap(args) {
    viewModel.goToReviews();
}

function amenitiesButtonTap(args) {
	viewModel.goToAmenities();
}

function galleryButtonTap(args) {
	viewModel.goToGallery();
}

function addToFavouritesButtonTap(args){
	viewModel.addToFavourites();
}

exports.navigatingTo = navigatingTo;
exports.reviewsButtonTap = reviewsButtonTap;
exports.amenitiesButtonTap = amenitiesButtonTap;
exports.galleryButtonTap = galleryButtonTap;