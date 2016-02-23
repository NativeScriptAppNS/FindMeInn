"use strict";

var descriptionViewModelModule = require("./description-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new descriptionViewModelModule.DescriptionViewModel();
    viewModel.description = args.context;
    page.bindingContext = viewModel;
}

exports.navigatingTo = navigatingTo;