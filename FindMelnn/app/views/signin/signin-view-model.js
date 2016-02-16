var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var timer = require("timer");

var SigninViewModel = (function (_super) {
    __extends(SigninViewModel, _super);
    function SigninViewModel() {
        _super.call(this);
        this._username = "";
        this._password = "";
    }
    
    Object.defineProperty(SigninViewModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            if (this._username !== value) {
                this._username = value;
                this.notifyPropertyChange("username", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(SigninViewModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            if (this._password !== value) {
                this._password = value;
                this.notifyPropertyChange("password", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    SigninViewModel.prototype.signin = function () {
        if (!this.IsValidData()) {
            return;
        }
        
        console.log(2);
        if (!this.beginLoading()) {
            return;
        }
        
        console.log(3);
        var _context = this;
        timer.setTimeout(function () {
            _context.showInfo("You are fake signed in");
            _context.password = "";
            _context.username = "";
            _context.endLoading();
            
            navigationModule.navigate({
                moduleName: viewsModule.Views.signUp,
                backstackVisible: false
            });
        }, 2000);
    };
    
    SigninViewModel.prototype.signup = function () {
        //NAVIGATE TO SIGNUP PAGE
        this.showInfo("Navigating to SignUpPage");
    };
    
    SigninViewModel.prototype.IsValidData = function () {
        if (!this.username || this.username === "") {
            this.showError("Please enter username.");
            return false;
        }
        
        if (!this.password || this.password === "") {
            this.showError("Please enter password.");
            return false;
        }
        
        return true;
    };
    
    return SigninViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SigninViewModel = SigninViewModel;
