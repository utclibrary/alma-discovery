(function() {
  "use strict";
  'use strict';

  var app = angular.module('viewCustom', ['angularLoad']);


  // ADD chat to no results
  /*
  app.component('prmNoSearchResultAfter',{
    bindings: {parentCtrl: '<'},
    controller: 'prmNoSearchResultAfterController',
    template: '<md-card class="default-card"><md-card-title><md-card-title-text><span class="md-headline">Get Help</span></md-card-title-text></md-card-title><md-card-content><div class="needs-js iframe normal">JavaScript is loading.</div></md-card-content></md-card>'
  });
*/
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
  /*Emergency Banner
  app.component('prmSearchBarAfter', {
   template: '<hr/><p style="text-align: center; font-size: 20px; color: white;">Please note that access to online resources will be unavailable this evening from 8pm-9pm.</p><hr/>'
 });*/
})();
/* Load JQuery */
var js = document.createElement('script');
js.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
document.head.appendChild(js);
//chat box
(function() {
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "us.libraryh3lp.com/js/libraryh3lp.js?4949";
  var y = document.getElementsByTagName("script")[0];
  y.parentNode.insertBefore(x, y);
})();
/* Add GTM */
var script = document.createElement('script');
script.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NK5VV3M');";
document.head.appendChild(script);
/* detect current tab */
setInterval(function() {
  //fix issue with browse search text
//  jQuery("[aria-label='BrowseSearch']").text("Browse Search");
  //array to detect current tab
  var searchTabsList = {
    "jsearch?": "Journal Search",
    "CustomCourseReserves": "Course Reserves",
    "citationlinker": "Citation Lookup",
    "browse": "Browse Search",
    "dbsearch?": "Database Search"
  };
  //cycle through array and set active tab
  jQuery.each(searchTabsList, function(key, value) {
    switch (document.location.href.indexOf(key) > -1) {
      case true:
        jQuery('#mainMenu a').removeClass('active');
        jQuery("[aria-label='" + value + "']").addClass('active');
        break;
    }
  });
}, 50);

/* insert icon before advanced|basic search */
setInterval(function() {
  if(jQuery("#advanced-search-icon").length == 0){
  jQuery("<md-icon id='advanced-search-icon'><svg width='24' height='24' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1088 800v64q0 13-9.5 22.5t-22.5 9.5h-224v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-224h-224q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h224v-224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v224h224q13 0 22.5 9.5t9.5 22.5zm128 32q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 53-37.5 90.5t-90.5 37.5q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z'/></svg></md-icon>").insertBefore(".switch-to-advanced .layout-row span");
}
  if(jQuery("#basic-search-icon").length == 0){
  jQuery("<md-icon id='basic-search-icon'><svg width='24' height='24' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path id='path2' d='m 1088,800 v 64 c 0,8.66667 -3.1667,16.16667 -9.5,22.5 -6.3333,6.33333 -13.8333,9.5 -22.5,9.5 H 480 c -8.66667,0 -16.16667,-3.16667 -22.5,-9.5 -6.33333,-6.33333 -9.5,-13.83333 -9.5,-22.5 v -64 c 0,-8.66667 3.16667,-16.16667 9.5,-22.5 6.33333,-6.33333 13.83333,-9.5 22.5,-9.5 h 576 c 8.6667,0 16.1667,3.16667 22.5,9.5 6.3333,6.33333 9.5,13.83333 9.5,22.5 z m 128,32 C 1216,708.66667 1172.1667,603.16667 1084.5,515.5 996.83333,427.83333 891.33333,384 768,384 644.66667,384 539.16667,427.83333 451.5,515.5 363.83333,603.16667 320,708.66667 320,832 c 0,123.33333 43.83333,228.8333 131.5,316.5 87.66667,87.6667 193.16667,131.5 316.5,131.5 123.33333,0 228.83333,-43.8333 316.5,-131.5 C 1172.1667,1060.8333 1216,955.33333 1216,832 Z m 512,832 c 0,35.3333 -12.5,65.5 -37.5,90.5 -25,25 -55.1667,37.5 -90.5,37.5 -36,0 -66,-12.6667 -90,-38 l -343,-342 c -119.3333,82.6667 -252.33333,124 -399,124 -95.33333,0 -186.5,-18.5 -273.5,-55.5 -87,-37 -162,-87 -225,-150 -63,-63 -113,-138 -150,-225 C 82.5,1018.5 64,927.33333 64,832 c 0,-95.33333 18.5,-186.5 55.5,-273.5 37,-87 87,-162 150,-225 63,-63 138,-113 225,-150 87,-37 178.16667,-55.5 273.5,-55.5 95.33333,0 186.5,18.5 273.5,55.5 87,37 162,87 225,150 63,63 113,138 150,225 37,87 55.5,178.16667 55.5,273.5 0,146.66667 -41.3333,279.6667 -124,399 l 343,343 c 24.6667,24.6667 37,54.6667 37,90 z' /></svg></md-icon>").insertBefore(".switch-to-simple .layout-row span");
}
/*align advanced search select fields */
jQuery("#advanced-search md-select-value").first().css( "margin-left", "70px" );
}, 50);
setInterval(function() {
  /* detect # of dbs in View Online */
  jQuery('prm-alma-viewit-items').removeClass();
  if(jQuery("prm-alma-viewit md-list-item").length == 1){
    jQuery('prm-alma-viewit-items').addClass('one');
  }else{
    jQuery('prm-alma-viewit-items').addClass('many');
}
}, 100);
