var constantsModule = require("nativescript-sqlite");

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
    
    return Hotels;

})(Object);

exports.hotels = new Hotels();