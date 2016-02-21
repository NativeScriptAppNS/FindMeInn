var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var timer = require("timer");

var ResultViewModel = (function (_super) {
    __extends(ResultViewModel, _super);
    function ResultViewModel() {
        _super.call(this);
        this._hotels = [{
            "url": "http://www.college-hotel.com/client/cache/contenu/_500____college-hotelp1diapo1_718.jpg",
            "name": "hotel name 1",
            "stars": 1,
            "city": "selo"
        }, {
            "url": "http://www.college-hotel.com/client/cache/contenu/_500____college-hotelp1diapo1_718.jpg",
            "name": "hotel name 2",
            "stars": 2,
            "city": "selo"
        }, {
            "url": "http://www.college-hotel.com/client/cache/contenu/_500____college-hotelp1diapo1_718.jpg",
            "name": "hotel name 3",
            "stars": 3,
            "city": "selo"
        }, {
            "url": "http://www.college-hotel.com/client/cache/contenu/_500____college-hotelp1diapo1_718.jpg",
            "name": "hotel name 4",
            "stars": 4,
            "city": "selo"
        }];
    }
    
    Object.defineProperty(ResultViewModel.prototype, "hotels", {
        get: function () {
            return this._hotels;
        },
        set: function (value) {
            if (this._hotels !== value) {
                this._hotels = value;
                this.notifyPropertyChange("hotels", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    ResultViewModel.prototype.viewHotel = function () {
        if (!this.beginLoading()) {
            return;
        }
        
        var _context = this;
        timer.setTimeout(function () {
            _context.showInfo("This is Detail View of hotel");
            _context.endLoading();
        }, 2000);
    };
    
    return ResultViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.ResultViewModel = ResultViewModel;
