var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");

var ResultViewModel = (function (_super) {
    __extends(ResultViewModel, _super);
    function ResultViewModel() {
        _super.call(this);
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
    
    ResultViewModel.prototype.viewHotel = function (args) {
        navigationModule.navigateTo({
            moduleName: viewsModule.views.details,
            backstackVisible: true,
            context: this.hotels[args.index]
        });
    };
    
    return ResultViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.ResultViewModel = ResultViewModel;
