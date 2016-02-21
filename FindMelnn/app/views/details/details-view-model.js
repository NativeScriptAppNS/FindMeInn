var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var timer = require("timer");

var DetailsViewModel = (function (_super) {
    __extends(DetailsViewModel, _super);
    function DetailsViewModel() {
        _super.call(this);
    }

    Object.defineProperty(DetailsViewModel.prototype, "hotel", {
        get: function () {
            return this._hotel;
        },
        set: function (value) {
            if (this._hotel !== value) {
                this._hotel = value;
                this.notifyPropertyChange("hotel", value);
            }
        },
        enumerable: true,
        configurable: true
    });

    DetailsViewModel.prototype.goToReviews = function() {
    	
	navigationModule.navigateTo({
		moduleName: viewsModule.views.reviews,
		backstackVisible: true,
		context: this.hotel.reviews.entries
	});
   };

   DetailsViewModel.prototype.goToAmenities = function() {
    	
	navigationModule.navigateTo({
		moduleName: viewsModule.views.amenities,
		backstackVisible: true,
		context: this.hotel.amenities
	});
   };

   DetailsViewModel.prototype.goToGallery = function() {
    	
	navigationModule.navigateTo({
		moduleName: viewsModule.views.gallery,
		backstackVisible: true,
		context: this.hotel.photos
	});
   };


return DetailsViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.DetailsViewModel = DetailsViewModel;
