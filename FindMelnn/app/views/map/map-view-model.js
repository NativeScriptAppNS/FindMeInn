var viewModelBaseModule = require("../../common/view-model-base");

var MapViewModel = (function (_super) {
    __extends(MapViewModel, _super);
    function MapViewModel() {
        _super.call(this);
        this._src = "";
    }
    
    Object.defineProperty(MapViewModel.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            if (this._src !== value) {
                this._src = value;
                this.notifyPropertyChange("src", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    return MapViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.MapViewModel = MapViewModel;
