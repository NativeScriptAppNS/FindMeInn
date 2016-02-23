"use strict";

var http = require("http");
var constantsModule = require("../common/constants");
var usersModule = require("./users");

var Hotels = (function (_super) {
    __extends(Hotels, _super);
    function Hotels() {
        _super.call(this);
    }
    
    Hotels.prototype.addHotel = function(hotelObj) {
        var username = usersModule.users.getUsername();
        
        return global.db.execSQL("insert into Hotels values (?, ?, ?)", [hotelObj.id, JSON.stringify(hotelObj), username]).then(
            function() {
                return "Inserted!";
            }, function(err) {
                throw Error(err);
            });
    };
    
    Hotels.prototype.removeHotel = function(id) {
        return global.db.execSQL("delete from Hotels where HotelId = ?;", [id]).then(
            function() {
                return "Removed: " + id;
            }, function(err) {
                throw Error(err);
            });
    };
    
    Hotels.prototype.getAll = function() {
        var username = usersModule.users.getUsername();
        
        return global.db.all("select * from Hotels").then(
            function(dbHotelsArray) {
                var hotels = [];
                for (var i = 0; i < dbHotelsArray.length; i++) {
                    var hotel = JSON.parse(dbHotelsArray[i][1]);
                    var user = dbHotelsArray[i][2];
                    if (user == username) {
                        hotels.push(hotel);
                    }
                }
                
                return hotels;
            }, function(err){
                throw Error(err);
            });
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