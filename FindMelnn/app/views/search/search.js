"use strict";

var applicationSettingsModule = require("application-settings");
var view = require("ui/core/view");
var searchViewModelModule = require("./search-view-model");
var navigationModule = require("../../common/navigation");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new searchViewModelModule.SearchViewModel();
    viewModel.minSlider = view.getViewById(page, "minSlider");
    viewModel.maxSlider = view.getViewById(page, "maxSlider");
    page.bindingContext = viewModel;
}

function navigatedTo(args) {
    if (!args.isBackNavigation) {
        var username = applicationSettingsModule.getString("username");
        viewModel.showInfo("Heromello " + username + '!');
    }
}

function findButtonTap(args) {
    viewModel.find();
}

function getMyLocationTap() {
    viewModel.getMyLocationTap();
}

exports.navigatingTo = navigatingTo;
exports.findButtonTap = findButtonTap;
exports.navigatedTo = navigatedTo;
exports.getMyLocationTap = getMyLocationTap;
exports.settingsButtonTap = navigationModule.goToSettings;
exports.favButtonTap = navigationModule.goToFavourites;
