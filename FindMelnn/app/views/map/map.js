var viewModule = require("ui/core/view");
var mapViewModelModule = require("./map-view-model");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new mapViewModelModule.MapViewModel();
    var cords = args.context;
    //console.log(JSON.stringify(cords));
    viewModel.src = "https://www.google.bg/maps/@" + cords[0] + "," + cords[1] + ",17z";
    page.bindingContext = viewModel;
}

exports.navigatingTo = navigatingTo;
