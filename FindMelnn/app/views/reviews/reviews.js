"use strict";

var reviewsViewModelModule = require("./reviews-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;

    viewModel = new reviewsViewModelModule.ReviewsViewModel();
    viewModel.reviews = args.context;
    page.bindingContext = viewModel;

    //     var date = new Date(2014,5,5);
    // date.setSeconds(date.getSeconds() + viewModel.reviews[0].date);
}

exports.navigatingTo = navigatingTo;