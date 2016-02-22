var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var timer = require("timer");

var ImageViewModel = (function (_super) {
    __extends(ImageViewModel, _super);
    function ImageViewModel() {
        _super.call(this);       
    }
    
    return ImageViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.ImageViewModel = ImageViewModel;
