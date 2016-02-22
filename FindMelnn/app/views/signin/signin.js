"use strict";

var signinViewModelModule = require("./signin-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new signinViewModelModule.SigninViewModel();
    page.bindingContext = viewModel;
}

function signinButtonTap(args) {
    viewModel.signin();
}

function signupButtonTap(args) {
    viewModel.signup();
}

exports.navigatingTo = navigatingTo;
exports.signinButtonTap = signinButtonTap;
exports.signupButtonTap = signupButtonTap;
