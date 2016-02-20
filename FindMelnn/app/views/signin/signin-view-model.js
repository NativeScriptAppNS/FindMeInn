var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var usersModule = require("../../services/users");

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
        
        if (!this.beginLoading()) {
            return;
        }
        
        console.log(usersModule.users.signin);
            
        usersModule.users.signin(this.username, this.password).then(
            function (response) {
                var result = response.content.toJSON();
                console.log(JSON.stringify(result));
                navigationModule.navigateTo({
                    moduleName: "views/search/search",
                    backstackVisible: true
                });
                this.showInfo("You are fake signed in");
            }, function (e) {
                console.log("Error occurred " + e);
            })
            .then(function(){
                this.endLoading();
            });
    };
    
    SigninViewModel.prototype.signup = function () {
        navigationModule.navigateTo({
            moduleName: viewsModule.views["signup"],
            backstackVisible: true
        });
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
