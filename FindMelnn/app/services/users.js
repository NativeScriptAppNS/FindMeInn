"use strict";

var applicationSettingsModule = require("application-settings");
var timer = require("timer");
var http = require("http");
var constantsModule = require("../common/constants");

var Users = (function (_super) {
    __extends(Users, _super);
    function Users() {
        _super.call(this);
        this.signin();
    }
    
    Object.defineProperty(Users.prototype, "isSignedIn", {
        get: function () {
            return applicationSettingsModule.getString("username") ? true : false;
        },
        set: function (value) {
            if (this._isSignedIn != value) {
                this._isSignedIn = value;
                this.notifyPropertyChange("isSignedIn", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Users.prototype.signup = function (username, password) {
        return http.request({
            url: "https://api.parse.com/1/users",
            method: "POST",
            headers: constantsModule.constants.parsecomheaders,
            content: JSON.stringify({ 
                "username": username, 
                "password": password 
            })
        }).then(function (response) {
            var result = response.content.toJSON();
            
            if (result.error) {
                throw Error(result.error);
            }
        });
    };
    
    Users.prototype.signin = function (username, password) {
        if (typeof username === 'undefined' || typeof password === 'undefined') {
            username = applicationSettingsModule.getString("username");
            password = applicationSettingsModule.getString("password");
        }
        
        return http.request({
            url: "https://api.parse.com/1/login?username=" + username + "&password=" + password,
            method: "GET",
            headers: constantsModule.constants.parsecomheaders
        }).then(function (response) {
            var result = response.content.toJSON();
            
            if (result.error) {
                throw Error(result.error);
            }
            
            applicationSettingsModule.setString("username", username);
            applicationSettingsModule.setString("password", password);
        });
    };
    
    Users.prototype.signout = function () {
        applicationSettingsModule.remove("username");
        applicationSettingsModule.remove("password");
        
        return new Promise(
            function(resolve, reject) {
                timer.setTimeout(function () {
                    resolve();
                }, 2000);
        });
    };
    
    return Users;
})(Object);

exports.users = new Users();