var myApp = angular.module('SapientApp', ['components.dialogBox']);

myApp.factory('ImageData', function() {
  return {
    images: [
      {
        image: './images/item-1.png',
        text: 'Hot Jobs'
      },
      {
        image: './images/item-2.png',
        text: 'Hot Povts'
      },
      {
        image: './images/item-3.png',
        text: 'Hot sapiurn'
      }
  ]};
});


myApp.controller("FormController", function() {
  this.src= ['./images/icon-1.png', './images/icon-3.png', './images/icon-2.png'];
  this.index = '1';
  this.allValid = true;
  this.message = ''
  this.validate = function(details) {
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var urlPattern = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if(details.password != details.confPassword) {
      this.allValid = false;
      this.message = "Password and Confirm Password does not match"
    } else if (!emailPattern.test(details.email)) {
      this.allValid = false;
     this.message = 'Invalid Email'; 
    } else if (!urlPattern.test(details.website)) {
      this.allValid = false;
      this.message = 'Invalid URL'; 
    } else {
      this.allValid = false;
      this.message = 'Success';
    }

  };
});

myApp.controller("CarousalController", function($scope, ImageData) {
  this.myInterval = 3000;
  this.slides = ImageData.images;
});
