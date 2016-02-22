var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var navigationModule = require("../../common/navigation");
var frameModule = require("ui/frame");
var timer = require("timer");

var topmost = frameModule.topmost();
var ImageViewModel = (function (_super) {
    __extends(ImageViewModel, _super);
    function ImageViewModel() {
        _super.call(this);       
    }

    ImageViewModel.prototype.goBackToGallery = function(args) {
    	navigationModule.goBack();
    };
    
    return ImageViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.ImageViewModel = ImageViewModel;
