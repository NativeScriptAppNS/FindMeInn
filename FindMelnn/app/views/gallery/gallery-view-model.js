"use strict";

var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");

var GalleryViewModel = (function (_super) {
    __extends(GalleryViewModel, _super);
    function GalleryViewModel() {
        _super.call(this);
    }

    GalleryViewModel.prototype.onImageTap = function(args) {
    	navigationModule.navigateTo({
		moduleName: viewsModule.views.image,
		backstackVisible: true,
		context: this.photos[args.index]
	});
    };

    return GalleryViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.GalleryViewModel = GalleryViewModel;