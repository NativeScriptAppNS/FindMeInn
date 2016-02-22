var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var hotelServices = require("../../services/hotels");
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

	DetailsViewModel.prototype.addToFavourites = function() {
        var _weakSelf = this;
	    hotelServices.hotels.getAll().then(
            function (hotels) {
                for (var index = 0; index < hotels.length; index++) {
                    var id = hotels[index][0];
                    if (id === _weakSelf.hotel.id) {
                        throw Error("Hotel already added to favorites.");
                    }
                }
            }, function (e) {
                throw Error(e);
            }).then(
                function () {
                     hotelServices.hotels.addHotel(_weakSelf.hotel).then(
                        function () {
                            _weakSelf.showInfo("Hotel Added!");
                        }, function (e) {
                            throw Error("Can't add this hotel.");
                        });
                }, function (e) {
                    _weakSelf.showError(e.message);
                });
    };
    
    DetailsViewModel.prototype.showMapButtonTap = function () {
        navigationModule.navigateTo({
            moduleName: viewsModule.views.map,
            backstackVisible: true,
            context: this.hotel.latLng
        });
    };

return DetailsViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.DetailsViewModel = DetailsViewModel;
