"use strict";

var reviewsViewModelModule = require("./reviews-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;

    viewModel = new reviewsViewModelModule.ReviewsViewModel();
    viewModel.reviews = args.context;
    page.bindingContext = viewModel;
}

exports.navigatingTo = navigatingTo;