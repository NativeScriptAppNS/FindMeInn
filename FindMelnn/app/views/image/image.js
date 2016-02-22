"use strict";

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
    viewModel.scaleArgs = 1;
    
    viewModel.imageView.on("pinch", function (args) {  
        if(viewModel.scaleArgs > 3.7 || viewModel.scaleArgs < 0.3) {
            return;
        }
        
        if(args.scale < 1) {  
            viewModel.imageView.animate({
               scale: { x: viewModel.scaleArgs, y: viewModel.scaleArgs},
               duration: 800
            });
            
            viewModel.scaleArgs -= viewModel.scaleArgs * 0.05;
        } else if (args.scale > 1) {
            viewModel.imageView.animate({
               scale: { x: viewModel.scaleArgs, y: viewModel.scaleArgs},
               duration: 800
            });
            viewModel.scaleArgs += viewModel.scaleArgs * 0.05;
        }
    });

//анимацията и обратната навигация се изпълняват едновременно и анимацията не се вижда :(
    viewModel.imageView.on("longPress", function () {
        viewModel.imageView.animate({
            opacity: 0,
            duration: 2000
        }).then(function () {
            viewModel.goBackToGallery();
        });



        //tova e vtori na4in
        // timer.setTimeout(function () {
        //     viewModel.goBackToGallery();
        // }, 2000);
    });
    
    page.bindingContext = viewModel;
}

function navigatedTo(){
	viewModel.imageView.animate({
	    opacity: 1,
        duration: 2000
	});
}

exports.navigatedTo = navigatedTo;
exports.navigatingTo = navigatingTo;
