
(function() {
  "use strict";
  'use strict';

  var app = angular.module('viewCustom', ['angularLoad']);


  // ADD chat to no results
  app.component('prmNoSearchResultAfter',{
    bindings: {parentCtrl: '<'},
    controller: 'prmNoSearchResultAfterController',
    template: '<md-card class="default-card"><md-card-title><md-card-title-text><span class="md-headline">Get Help</span></md-card-title-text></md-card-title><md-card-content><div class="needs-js iframe normal">JavaScript is loading.</div></md-card-content></md-card>'
  });


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
   template: '<br/><hr/><p style="text-align: center; font-size: 20px; color: white;">Please note that access to online resources will be unavailable this evening from 8pm-9pm.</p><hr/>'
 });*/
  /* add ILL to card menu */
  app.component('prmLibraryCardMenuAfter', {
    template:  '<button class="button-with-icon zero-margin md-button md-primoExplore-theme md-ink-ripple" type="button" aria-label="Go To My ILL account" href="https://utc.illiad.oclc.org/illiad/logon.html"><span>ILL Account</span></button>'
  });
})();

//chat box
setInterval(function() {
(function() {
  var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "us.libraryh3lp.com/js/libraryh3lp.js?4949";
  var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
})();
}, 50);
/* Load JQuery */

var js = document.createElement('script') ;
js.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
document.head.appendChild(js);

/* detect current tab */
setInterval(function() {
      jQuery("[aria-label='BrowseSearch']" ).text("Browse Search");
  if(document.location.href.indexOf('jsearch?') > -1) {
    jQuery('#mainMenu a').removeClass('active');
    jQuery("[aria-label='Journal Search']" ).addClass('active');
  }else if(document.location.href.indexOf('CustomCourseReserves') > -1) {
    jQuery('#mainMenu a').removeClass('active');
    jQuery("[aria-label='Course Reserves']" ).addClass('active');
  }else if(document.location.href.indexOf('citationlinker') > -1) {
    jQuery('#mainMenu a').removeClass('active');
    jQuery("[aria-label='Citation Lookup']" ).addClass('active');
  }else if(document.location.href.indexOf('browse') > -1) {
    jQuery('#mainMenu a').removeClass('active');
    jQuery("[aria-label='BrowseSearch']" ).addClass('active');
  }else if(document.location.href.indexOf('dbsearch?') > -1) {
    jQuery('#mainMenu a').removeClass('active');
    jQuery("[aria-label='Database Search']" ).addClass('active');
  }
}, 50);
