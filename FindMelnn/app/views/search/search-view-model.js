var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var timer = require("timer");

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
            if (this._minPrice !== value) {
                this._minPrice = value;
                this.notifyPropertyChange("minPrice", value);
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
            if (this._maxPrice !== value) {
                this._maxPrice = value;
                this.notifyPropertyChange("maxPrice", value);
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
        }, 2000);
    };
    
    SearchViewModel.prototype.IsValidData = function () {
        
        console.log(this._city);
        console.log(this._distance);
        console.log(this._bedroomsCount);
        console.log(this._bedsCount);
        console.log(this._minPrice);
        console.log(this._maxPrice);
        return true;
    };
    
    return SearchViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SearchViewModel = SearchViewModel;
