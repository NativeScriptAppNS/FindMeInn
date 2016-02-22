"use strict";

var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var hotelsServices = require("../../services/hotels");
var mapsServices = require("../../services/maps");

var SearchViewModel = (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel() {
        _super.call(this);
        this._city = "";
        this._distance = 20;
        this._bedroomsCount = 1;
        this._bedsCount = 1;
        this._minPrice = 20;
        this._maxPrice = 100;
    }
    
    Object.defineProperty(SearchViewModel.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            if (this._city !== value) {
                this._city = value;
                this.notifyPropertyChange("city", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SearchViewModel.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (value) {
            if (this._distance !== value) {
                this._distance = value;
                this.notifyPropertyChange("distance", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SearchViewModel.prototype, "bedroomsCount", {
        get: function () {
            return this._bedroomsCount;
        },
        set: function (value) {
            if (this._bedroomsCount !== value) {
                this._bedroomsCount = value;
                this.notifyPropertyChange("bedroomsCount", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SearchViewModel.prototype, "bedsCount", {
        get: function () {
            return this._bedsCount;
        },
        set: function (value) {
            if (this._bedsCount !== value) {
                this._bedsCount = value;
                this.notifyPropertyChange("bedsCount", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SearchViewModel.prototype, "minPrice", {
        get: function () {
            return this._minPrice;
        },
        set: function (value) {
            if (this._minPrice !== value && value <= this._maxPrice) {
                this._minPrice = value;
                this.notifyPropertyChange("minPrice", value);
            } else {
                this.maxSlider.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SearchViewModel.prototype, "maxPrice", {
        get: function () {
            return this._maxPrice;
        },
        set: function (value) {
            if (this._maxPrice !== value && value >= this._minPrice) {
                this._maxPrice = value;
                this.notifyPropertyChange("maxPrice", value);
            } else {
                this.minSlider.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    SearchViewModel.prototype.find = function () {
        if (!this.IsValidData()) {
            return;
        }
        
        if (!this.beginLoading()) {
            return;
        }
        
        var error = null;
        var _weakSelf = this;
        mapsServices.maps.getCordsOfCity(this._city).then(
            function (cords) {
                var params = {
                    "bedroomsCount": _weakSelf._bedroomsCount,
                    "distance": _weakSelf._distance,
                    "bedsCount": _weakSelf._bedsCount,
                    "minPrice": _weakSelf._minPrice,
                    "maxPrice": _weakSelf._maxPrice,
                    "latitude": cords.lat,
                    "longitude": cords.lng
                };
        
                hotelsServices.hotels.find(params).then(
                    function (hotels) {
                         navigationModule.navigateTo({
                            moduleName: viewsModule.views.result,
                            backstackVisible: true,
                            context: hotels.result
                        });
                    },
                    function (e) {
                        throw Error(e);
                    });
            }, function (err) {
                error = err.message;
            })
            .then(function () {
                _weakSelf.stopLoading();
            });
            
        if (error) {
            this.showError(error);
        }
    };

    SearchViewModel.prototype.goToFavourites = function() {
        hotelsServices.hotels.getAll()
            .then(function(hotels){
                navigationModule.navigateTo({
                moduleName: viewsModule.views.details,
                backstackVisible: true,
                context: [hotels]
            });
        }); 

    };
    
    SearchViewModel.prototype.goToSettings = function() {
        navigationModule.navigateTo({
            moduleName: viewsModule.views.settings,
            backstackVisible: true
        });
    };
    
    SearchViewModel.prototype.IsValidData = function () {
        if (this._city === "") {
            this.showError("Please enter a city.");
            return false;
        }
        if (isNaN(this._distance) || this._distance <= 0) {
            this.showError("Distance must be a number greater than zero.");
            return false;
        }
        if (isNaN(this._bedroomsCount) || this._bedroomsCount <= 0) {
            this.showError("Bedrooms count must be a number greater than zero.");
            return false;
        }
        if (isNaN(this._bedsCount) || this._bedsCount <= 0) {
            this.showError("Beds count must be a number greater than zero.");
            return false;
        }
        
        return true;
    };
    
    SearchViewModel.prototype.getMyLocationTap = function () {
        var _weakThis = this;
        mapsServices.maps.getMyCity().then(
            function (mycityName) {
                _weakThis.city = mycityName; 
            },
            function (e) {
                _weakThis.showError(e.message);
            });
    };
    
    return SearchViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SearchViewModel = SearchViewModel;
