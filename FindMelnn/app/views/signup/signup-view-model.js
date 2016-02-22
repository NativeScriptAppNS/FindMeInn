"use strict";

var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var usersModule = require("../../services/users");

var SignupViewModel = (function (_super) {
    __extends(SignupViewModel, _super);
    function SignupViewModel() {
        _super.call(this);
        this._username = "";
        this._password = "";
    }
    
    Object.defineProperty(SignupViewModel.prototype, "username", {
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
    
    Object.defineProperty(SignupViewModel.prototype, "password", {
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
    
    SignupViewModel.prototype.signup = function () {
        if (!this.IsValidData()) {
            return;
        }
        
        if (!this.beginLoading()) {
            return;
        }
        
        var _weakThis = this;
        usersModule.users.signup(this.username, this.password).then(
            function () {
                usersModule.users.signin(_weakThis.username, _weakThis.password).then(
                    function () {
                        navigationModule.navigateTo({
                            moduleName: viewsModule.views.search,
                            clearHistory: true
                        });
                    }, function () {
                        throw Error();
                    });
            }, function (e) {
                _weakThis.showError("Can't signup!");
            }).then(function () {
                _weakThis.endLoading();
            });
    };
    
    SignupViewModel.prototype.IsValidData = function () {
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
    
    return SignupViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SignupViewModel = SignupViewModel;
