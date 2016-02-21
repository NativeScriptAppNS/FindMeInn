var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var timer = require("timer");

var GalleryViewModel = (function (_super) {
    __extends(GalleryViewModel, _super);
    function GalleryViewModel() {
        _super.call(this);
    }

    return GalleryViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.GalleryViewModel = GalleryViewModel;