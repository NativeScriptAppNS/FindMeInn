"use strict";

var galleryViewModelModule = require("./gallery-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new galleryViewModelModule.GalleryViewModel();
    viewModel.photos = args.context;
    page.bindingContext = viewModel;
}

function onImageTap(args) {
	viewModel.onImageTap(args);
}

exports.navigatingTo = navigatingTo;
exports.onImageTap = onImageTap;