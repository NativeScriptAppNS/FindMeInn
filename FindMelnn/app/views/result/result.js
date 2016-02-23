"use strict";

var resultViewModelModule = require("./result-view-model");
var navigationModule = require("../../common/navigation");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new resultViewModelModule.ResultViewModel();
    viewModel.hotels = args.context;
    page.bindingContext = viewModel;
}

function viewHotel() {
    viewModel.viewHotel();
}

exports.navigatingTo = navigatingTo;
exports.viewHotel = viewHotel;
exports.settingsButtonTap = navigationModule.goToSettings;
exports.favButtonTap = navigationModule.goToFavourites;
