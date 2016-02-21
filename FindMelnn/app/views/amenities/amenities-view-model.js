var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var timer = require("timer");

var AmenitiesViewModel = (function (_super) {
    __extends(AmenitiesViewModel, _super);
    function AmenitiesViewModel() {
        _super.call(this);
    }

    return AmenitiesViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.AmenitiesViewModel = AmenitiesViewModel;