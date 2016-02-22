"use strict";

var viewModelBaseModule = require("../../common/view-model-base");

var ReviewsViewModel = (function (_super) {
    __extends(ReviewsViewModel, _super);
    function ReviewsViewModel() {
        _super.call(this);
    }

    return ReviewsViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.ReviewsViewModel = ReviewsViewModel;