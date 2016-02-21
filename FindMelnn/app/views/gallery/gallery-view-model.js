var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var imageModule = require("ui/image");
var timer = require("timer");

var GalleryViewModel = (function (_super) {
    __extends(GalleryViewModel, _super);
    function GalleryViewModel() {
        _super.call(this);
    }

    GalleryViewModel.prototype.onImageLongPressed = function(args) {
    	this.pressedImageSrc = this.photos[args.index].large;
    	console.log(this.photos[args.index].large);
    	
    	var _weakThis = this;
    	var timerId = timer.setInterval(function (){
			_weakThis.grid._cols[0].value -= 0.1;
			_weakThis.grid._cols[1].value += 0.1;
			console.log(_weakThis.grid._cols[1].value);
    	}, 100);

    	timer.setTimeout(function (){
			timer.clearInterval(timerId);
    	}, 1000);
    };

 	Object.defineProperty(GalleryViewModel.prototype, "pressedImageSrc", {
        get: function () {
            return this._pressedImageSrc;
        },
        set: function (value) {
            if (this._pressedImageSrc !== value) {
                this._pressedImageSrc = value;
                this.notifyPropertyChange("pressedImageSrc", value);
            }
        },
        enumerable: true,
        configurable: true
    });

    return GalleryViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.GalleryViewModel = GalleryViewModel;