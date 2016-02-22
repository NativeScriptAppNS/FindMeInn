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


    var scaleArgs = 1;
    viewModel.imageView.on("pinch", function (args) {  
            console.log("new pinch");
            if(scaleArgs > 3.7 || scaleArgs < 0.3) {
                return;
            }
        if(args.scale < 1) {  
        console.log('args.scale  '+args.scale);  
            viewModel.imageView.animate({
               scale: { x: scaleArgs, y: scaleArgs},
               duration: 800
            });
            console.log(scaleArgs);
            scaleArgs -= scaleArgs * 0.05;
        } else if (args.scale > 1){
            console.log('args.scale  '+args.scale);
            viewModel.imageView.animate({
               scale: { x: scaleArgs, y: scaleArgs},
               duration: 800
            });
            console.log(scaleArgs);
            scaleArgs += scaleArgs * 0.05;
        }
    });

//анимацията и обратната навигация се изпълняват едновременно и анимацията не се вижда :(
    viewModel.imageView.on("longPress", function (args) {
        viewModel.imageView.animate({
            opacity: 0,
            duration: 4000
        });

        viewModel.goBackToGallery();
        
    });
}

function navigatedTo(){
	viewModel.imageView.animate({
	    opacity: 1,
        duration: 2000
	});
}

exports.navigatedTo = navigatedTo;
exports.navigatingTo = navigatingTo;
