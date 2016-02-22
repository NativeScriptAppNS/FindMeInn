var imageViewModelModule = require("./image-view-model");
var viewModule = require("ui/core/view");
var timer = require("timer");

var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new imageViewModelModule.ImageViewModel();
    viewModel.image = args.context;
    viewModel.imageView = viewModule.getViewById(page, "myImage");
    viewModel.imageView.opacity = 0;
    page.bindingContext = viewModel;

    console.log(viewModel.image.xlarge);
    viewModel.imageView.on("swipe", function (args) {

	    console.log("Swipe Direction: " + args.direction);
	});
}

function navigatedTo(){
	viewModel.imageView.animate({
	    opacity: 1,
        duration: 1500
	});
}

exports.navigatedTo = navigatedTo;
exports.navigatingTo = navigatingTo;
