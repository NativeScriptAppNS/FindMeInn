"use strict";

var signupViewModelModule = require("./signup-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new signupViewModelModule.SignupViewModel();
    page.bindingContext = viewModel;
}

function signupButtonTap() {
    viewModel.signup();
}

exports.navigatingTo = navigatingTo;
exports.signupButtonTap = signupButtonTap;
