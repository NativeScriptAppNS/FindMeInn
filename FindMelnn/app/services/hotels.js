// var sqlModule = require("nativescript-sqlite");
var http = require("http");
var constantsModule = require("../common/constants");

var Hotels = (function (_super) {
    __extends(Hotels, _super);
    function Hotels() {
        _super.call(this);
    }
    
    
    Hotels.prototype.addHotel = function (jsonObject) {
        
    };
    
    Hotels.prototype.removeHotel = function (id) {
        
    };
    
    Hotels.prototype.getAll = function () {
        
    };
    
    Hotels.prototype.find = function (params) {
        var url = "https://zilyo.p.mashape.com/search?";
        
        for (var key in params) {
            url += (key + '=' + params[key] + '&');
        }
        url = url.substring(0, url.length - 1);
        
        return http.request({
            url: url,
            method: "GET",
            headers: constantsModule.constants.zilyoheaders
        }).then(function (response) {
            var result = response.content.toJSON();
            
            if (result.error) {
                throw Error(result.error);
            }
            
            return result;
        });
    };
    
    return Hotels;
})(Object);

exports.hotels = new Hotels();