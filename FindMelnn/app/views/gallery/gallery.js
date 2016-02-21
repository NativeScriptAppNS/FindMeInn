var galleryViewModelModule = require("./gallery-view-model");
var viewModule = require("ui/core/view");

var viewModel;


function navigatingTo(args) {
    var page = args.object;
    viewModel = new galleryViewModelModule.GalleryViewModel();
    viewModel.photos = args.context;
    viewModel.grid = viewModule.getViewById(page, "myGrid");
    page.bindingContext = viewModel;
}

function onImageLongPressed(args) {
	viewModel.onImageLongPressed(args);
}

exports.navigatingTo = navigatingTo;
exports.onImageLongPressed = onImageLongPressed;