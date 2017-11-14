(function() {
  "use strict";
  'use strict';


  var app = angular.module('viewCustom', ['angularLoad']);

  /****************************************************************************************************/

  /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

  /*var app = angular.module('centralCustom', ['angularLoad']);*/

  /****************************************************************************************************/

  app.controller('prmLogoAfterController', [function() {
    var vm = this;
    vm.getIconLink = getIconLink;

    function getIconLink() {
      return vm.parentCtrl.iconLink;
    }
  }]);


  //update template to include new URL for institution
  app.component('prmLogoAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'prmLogoAfterController',
    template: '<div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner"><a href="https://www.utc.edu/library/"><img class="logo-image" alt="{{::(\'nui.header.LogoAlt\' | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
  });
})();
//add jQuery
var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
//chat box
(function() {
  var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "us.libraryh3lp.com/js/libraryh3lp.js?4949";
  var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
})();

  console.log('page loaded');
// check url to set active state on top menu items
var url = window.location.href;
console.log(url);
console.log("ver DEV01.04");

if (url.indexOf("CourseReserves") >= 0) {
  console.log("on Course Reserves tab");
}
else if (url.indexOf("jsearch") >= 0) {
  console.log("on Journal Search tab");
  jQuery("[aria-label='Journal Search']").addClass('active');
}
else if (url.indexOf("citationlinker") >= 0) {
  console.log("on Citation Lookup tab");
}
else if (url.indexOf("browse?") >= 0) {
  console.log("on Browse Search tab");
}
else{
  console.log("on New Search tab");
}
