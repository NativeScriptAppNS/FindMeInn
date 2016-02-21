// var sqlModule = require("nativescript-sqlite");
var http = require("http");
var constantsModule = require("../common/constants");

var Hotels = (function (_super) {
    __extends(Hotels, _super);
    function Hotels() {
        _super.call(this);
    }
    
    
    Hotels.prototype.addHotel = function () {
        global.db.execSQL("insert into Hotels values (?, ?)", ["2","test2"])
        .then(function(id){
            console.log("inserted:", id);
        }, function(err){
            console.log(err);
        });

         global.db.execSQL("insert into Hotels values (?, ?)", ["1","test1"])
        .then(function(id){
            console.log("inserted:", id);
        }, function(err){
            console.log(err);
        });

        return global.db.execSQL("insert into Hotels values (?, ?)", ["3","test3"])
        .then(function(id){
            console.log("inserted:", id);
        }, function(err){
            console.log(err);
        });
    };
    
    Hotels.prototype.removeHotel = function (id) {
        return global.db.execSQL("delete from Hotels where HotelId = ?;", [id])
        .then(function(){
            console.log("deleted: ", id);
        }, function(err){
            console.log(err);
        });
    };
    
    Hotels.prototype.getAll = function () {
        return global.db.all("select * from Hotels")
        .then(function(resultSet) {
            console.log("result is: ", resultSet);
        }, function(err){
            console.log(err);
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