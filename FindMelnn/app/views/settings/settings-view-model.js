"use strict";

var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var usersModule = require("../../services/users");

var SettingsViewModel = (function (_super) {
    __extends(SettingsViewModel, _super);
    function SettingsViewModel() {
        _super.call(this);
    }
    
    SettingsViewModel.prototype.signout = function () {
        if (!this.beginLoading()) {
            return;
        }
            
        var _weakThis = this;
        usersModule.users.signout().then(
            function () {
                navigationModule.navigateTo({
                    moduleName: viewsModule.views.signin,
                    clearHistory: true
                });
            }, function (e) {
                _weakThis.showError("Can't signout!");
            }).then(function(){
                _weakThis.endLoading();
            });
    };

    return SettingsViewModel;
    
})(viewModelBaseModule.ViewModelBase);

exports.SettingsViewModel = SettingsViewModel;
