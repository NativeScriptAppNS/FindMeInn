var http = require("http");

var Maps = (function (_super) {
    __extends(Maps, _super);
    function Maps() {
        _super.call(this);
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
    
    return Maps;
})(Object);

exports.maps = new Maps();