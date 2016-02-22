var http = require("http");
var locationModule = require("nativescript-geolocation");

var Maps = (function (_super) {
    __extends(Maps, _super);
    function Maps() {
        _super.call(this);
        this.isEnabled = false;
    }
    
    Maps.prototype.getCordsOfCity = function (cityName) {
        return http.request({
            url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + cityName,
            method: "GET"
        }).then(function (response) {
            var result = response.content.toJSON();
            
            if (result.status !== "OK") {
                throw Error("Can't find " + cityName + "!");
            }
            
            return result.results[0].geometry.location;
        });
    };
    
    Maps.prototype.getCityNameByCords = function (cords) {
        return http.request({
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + cords.lat + ',' + cords.lng,
            method: "GET"
        }).then(function (response) {
            var result = response.content.toJSON();
            if (result.status !== "OK") {
                throw Error("Can't find you!");
            }
            
            return result.results[1].address_components[1].long_name;
        });
    };
    
    Maps.prototype.getMyLocation = function () {
        return new Promise(function (resolve, reject) {
            if (!locationModule.isEnabled()) {
                locationModule.enableLocationRequest();
                reject("Location service is not enabled");
            }
            
            locationModule.getCurrentLocation().then(
                function (location) {
                    resolve({
                        lat: location.latitude,
                        lng: location.longitude
                    });
                },
                function (e) {
                    reject(e);
                });
        });
    };
    
    Maps.prototype.getMyCity = function () {
        var _weakSelf = this;
        return this.getMyLocation().then(
            function (cords) {
                return _weakSelf.getCityNameByCords(cords).then(
                    function (cityName) {
                        return cityName;
                    },
                    function (e) {
                        throw Error(e);
                    }
                );
            },
            function (e) {
                throw Error(e);
            }
        );
    };
    
    return Maps;
})(Object);

exports.maps = new Maps();
