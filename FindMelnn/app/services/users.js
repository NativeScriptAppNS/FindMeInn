var applicationSettingsModule = require("application-settings");
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
            return this._isSignedIn;
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
        http.request({
            url: "https://api.parse.com/1/users",
            method: "POST",
            headers: constantsModule.constants.parsecomheaders,
            content: JSON.stringify({ 
                "username": username, 
                "password": password 
            })
        }).then(function (response) {
            var result = response.content.toJSON();
            console.log(JSON.stringify(result));
        }, function (e) {
            console.log("Error occurred " + e);
        });
    };
    
    Users.prototype.signin = function (username, password) {
        if (typeof username === 'undefined' || typeof password === 'undefined') {
            username = applicationSettingsModule.getString("username");
            password = applicationSettingsModule.getString("password");
        }
        
        http.request({
            url: "https://api.parse.com/1/login?username=" + username + "&password=" + password,
            method: "GET",
            headers: constantsModule.constants.parsecomheaders
        }).then(function (response) {
            var result = response.content.toJSON();
            console.log(JSON.stringify(result));
        }, function (e) {
            console.log("Error occurred " + e);
        });
    };
    
    return Users;
})(Object);

exports.users = new Users();