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
  jQuery("<md-icon id='advanced-search-icon'><svg width='100%' height='100%' viewBox='-2 -4 24 24' y='72' xmlns='http://www.w3.org/2000/svg' fit='' preserveAspectRatio='xMidYMid meet' focusable='false'><polyline points='0 10 8.63 10 8.63 8 0 8'></polyline><polyline points='0 16 8.63 16 8.63 14 0 14'></polyline><polyline points='0 4 8.63 4 8.63 2 0 2'></polyline><path d='M17.17,18.17L14,15l-1.41,1.41L17.17,21l4.59-4.59L20.34,15M17.17,5.83L20.34,9l1.41-1.41L17.17,3,12.58,7.59,14,9Z' transform='translate(-2.24 -3)'></path></svg></md-icon>").insertBefore(".switch-to-advanced .layout-row span");
}
  if(jQuery("#basic-search-icon").length == 0){
  jQuery("<md-icon id='basic-search-icon'><svg width='100%' height='100%' viewBox='-2 -4 24 24' y='72' xmlns='http://www.w3.org/2000/svg' fit='' preserveAspectRatio='xMidYMid meet' focusable='false'><polyline points='0 10 8.63 10 8.63 8 0 8'></polyline><path d='M21.76,5.41L20.34,4,17.17,7.17,14,4,12.58,5.41,17.17,10m-4.59,8.59L14,20l3.17-3.17L20.34,20l1.41-1.41L17.17,14Z' transform='translate(-2.24 -4)'></path></svg></md-icon></md-icon>").insertBefore(".switch-to-simple .layout-row span");
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
