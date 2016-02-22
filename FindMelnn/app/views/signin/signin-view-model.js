"use strict";

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
            
        var _weakThis = this;
        usersModule.users.signin(this.username, this.password).then(
            function () {
                navigationModule.navigateTo({
                    moduleName: viewsModule.views.search,
                    clearHistory: true
                });
            }, function (e) {
                _weakThis.showError("Can't singin!");
            }).then(function(){
                _weakThis.endLoading();
            });
    };
    
    SigninViewModel.prototype.signup = function () {
        navigationModule.navigateTo({
            moduleName: viewsModule.views.signup,
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
