var mod = angular.module('components.dialogBox',[])
mod.directive("imageDirective", function() {
  return {
    scope: {
      icon: '&',
      index: '=',
      setindex: '=',
      showsome: '='
    },
    template: template,
    bindToController: true
  }
});

var template =
'<div class="dir-container"><div class="icon-container"><img src={{icon()}} ng-click="setindex = index"></div>' +
'<div class="wrapper" ng-class="{\'make-hidden\':!showsome}"> ' +
  '<div class="rect1"></div>' +
  '<div class="rect2"> </div>'+
  '<div class="rect3"></div>' +
  '<div class="parallelogram-left"></div>' +
  '<div class="parallelogram-right"></div>' +
  '<div class="parallelogram-btm"></div>' +
'</div></div>'