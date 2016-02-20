var view = require("ui/core/view");
var timer = require("timer");
var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");

var SearchViewModel = (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel() {
        _super.call(this);
        this._city = "";
        this._distance = "";
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
        
        var _context = this;
        timer.setTimeout(function () {
            _context.showInfo("You find");
            _context.endLoading();
            
            navigationModule.navigateTo({
                moduleName: "views/result/result",
                backstackVisible: true
            });
        }, 2000);
    };

    SearchViewModel.prototype.goToFavourites = function() {
        navigationModule.navigateTo({
            moduleName: "views/favourites/favourites",
            backstackVisible: true
        });
    };
    
    SearchViewModel.prototype.goToSettings = function() {
        navigationModule.navigateTo({
            moduleName: "views/settings/settings",
            backstackVisible: true
        });
    };
    
    SearchViewModel.prototype.IsValidData = function () {
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
    
    return SearchViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SearchViewModel = SearchViewModel;
