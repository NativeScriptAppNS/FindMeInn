"use strict";

var detailsViewModelModule = require("./details-view-model");
var navigationModule = require("../../common/navigation");
var viewModule = require("ui/core/view");


var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new detailsViewModelModule.DetailsViewModel();
    viewModel.hotel = args.context;
    page.bindingContext = viewModel;
    viewModel.description = viewModule.getViewById(page, "description");    

    viewModel.description.on("doubleTap", function () {
        viewModel.showDescription();
	});
}

function reviewsButtonTap() {
    viewModel.goToReviews(); 
}

function amenitiesButtonTap() {
	viewModel.goToAmenities();
}

function galleryButtonTap() {
	viewModel.goToGallery();
}

function addToFavouritesButtonTap(){
	viewModel.addToFavourites();
}

function showMapButtonTap() {
    viewModel.showMapButtonTap();
}

exports.navigatingTo = navigatingTo;
exports.reviewsButtonTap = reviewsButtonTap;
exports.amenitiesButtonTap = amenitiesButtonTap;
exports.addToFavouritesButtonTap = addToFavouritesButtonTap;
exports.galleryButtonTap = galleryButtonTap;
exports.showMapButtonTap = showMapButtonTap;
exports.settingsButtonTap = navigationModule.goToSettings;
exports.favButtonTap = navigationModule.goToFavourites;
