(function () {
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
  app.controller('prmLogoAfterController', [function () {
    var vm = this;
    vm.getIconLink = getIconLink;

    function getIconLink() {
      return vm.parentCtrl.iconLink;
    }
  }]);
  //scroll down on mobile view advanced search
  // change advanced search to jump to results
  app.controller('prmAdvancedSearchAfterController', function ($scope) {
    // watch to see if advanced search is there
    var advancedSearchObs = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var node = mutation.addedNodes[i];

          if (node.nodeName == "BUTTON" && document.querySelector("prm-advanced-search .button-confirm.button-large.button-with-icon.md-button.md-primoExplore-theme.md-ink-ripple")) {
            //need an id to jump to
            let submitArea = document.querySelector(".advanced-search-output.layout-row.flex");
            submitArea.setAttribute("id", "advancedSearchSubmitArea");

            var submitBtn = document.querySelector("prm-advanced-search .button-confirm.button-large.button-with-icon.md-button.md-primoExplore-theme.md-ink-ripple");
            submitBtn.addEventListener("click", function () {
              // wait for some results
              var advancedSearchObs2 = new MutationObserver(function (mutations2) {
                mutations2.forEach(function (mutation2) {
                  if (!mutation2.addedNodes) return
                  for (var i = 0; i < mutation2.addedNodes.length; i++) {
                    var node = mutation2.addedNodes[i];
                    if (node.nodeName == "PRM-SEARCH-RESULT-SORT-BY" && window.innerHeight < 775) {
                      window.location.hash = 'advancedSearchSubmitArea';
                      advancedSearchObs2.disconnect();
                    }
                  }
                });
              });

              advancedSearchObs2.observe(document.getElementsByTagName('prm-explore-main')[0], {
                childList: true
                , subtree: true
                , attributes: false
                , characterData: false
              })
              //end wait for some results
            });
          }
        }
      })
    })

    advancedSearchObs.observe(document.getElementsByTagName('prm-advanced-search')[0], {
      childList: true
      , subtree: true
      , attributes: false
      , characterData: false
    })
  });

  app.component('prmAdvancedSearchAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'prmAdvancedSearchAfterController'
  });

  // END scroll code
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
  template: '<div id="alert"></div>'
 });*/
  /* add Get help button */
  app.component('prmSearchResultListAfter', {
    template: '<div id="libraryh3lp"><a href="https://utc.edu/library/help" target="_blank"><md-icon id="help-bubble"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M50.002,32.008c9.916,0,17.989,8.07,17.989,17.992c0,9.92-8.073,17.99-17.989,17.99   c-9.921,0-17.995-8.07-17.995-17.99C32.007,40.078,40.081,32.008,50.002,32.008 M50.002,14.018   C30.13,14.018,14.018,30.127,14.018,50S30.13,85.982,50.002,85.982c19.873,0,35.98-16.109,35.98-35.982   S69.875,14.018,50.002,14.018L50.002,14.018z"/></g><g display="none"><polygon display="inline" points="79.401,33.663 79.401,54.628 20.597,54.628 20.597,27.131 14.064,27.131 14.064,72.869    20.597,72.869 20.597,61.161 79.401,61.161 79.401,72.869 85.936,72.869 85.936,33.663  "/><path display="inline" d="M32.622,51.02c4.41,0,7.986-3.576,7.986-7.984c0-4.409-3.576-7.985-7.986-7.985   c-4.407,0-7.985,3.576-7.985,7.985C24.637,47.443,28.214,51.02,32.622,51.02z"/><polygon display="inline" points="74.363,47.751 74.363,37.952 64.565,37.952 43.804,37.952 43.804,51.02 74.363,51.02  "/></g><g><path d="M50.463,22.014c-19.869,0-35.984,11.045-35.984,24.674c0,6.475,3.667,12.342,9.612,16.748l-4.027,14.551l20.54-7.582   c3.132,0.615,6.438,0.967,9.859,0.967c19.873,0,35.98-11.049,35.98-24.684C86.443,33.059,70.336,22.014,50.463,22.014z"/></g><g display="none"><rect x="15.206" y="32.138" transform="matrix(0.7071 0.7071 -0.7071 0.7071 47.1326 -19.5203)" display="inline" width="63.844" height="29.986"/><polygon display="inline" points="64.752,85.957 64.842,86.045 85.982,85.98 86.045,64.842 85.957,64.756  "/></g></svg></md-icon> Ask a Librarian</a></div>'
  });
})();
/* Load JQuery */
var js = document.createElement('script');
js.src = "//code.jquery.com/jquery-3.4.0.min.js";
document.head.appendChild(js);
/* Add GTM */
var script = document.createElement('script');
script.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NK5VV3M');";
document.head.appendChild(script);
/* run this block at set intervals */
setInterval(function () {
  //hide parent div of facet Include Held by library selection
  jQuery("[data-facet-value='tlevel-available_p']").hide();


  /* add dev alert bar to top of page on 01UTC_INST:DEV */
  if ((window.location.href.indexOf("01UTC_INST:DEV") > -1) && (jQuery("#div-environment").length == 0)) {
    jQuery('body').prepend("<div id='div-environment' class='alert-danger'> | <strong>DEV</strong> environment | </div>")
  }
  if ((window.location.href.indexOf("sandbox01-na.primo.exlibrisgroup.com") > -1) && (jQuery("#div-environment").length == 0)) {
    jQuery('body').prepend("<div id='div-environment' class='alert-info'> | <strong>SANDBOX</strong> environment | </div>")
  }
  if ((window.location.href.indexOf("http://localhost:8003/") > -1) && (jQuery("#div-environment").length == 0)) {
    jQuery('body').prepend("<div id='div-environment' class='alert-success'> | <strong>LOCAL DEV</strong> environment | </div>")
  }
  if (jQuery("#alert").length == 0) {
    const newLocal = '.header';
    jQuery("<div id='alert'></div><div id='libAlert'></div>").insertAfter(newLocal);
  }
  /* remove get help on new menu option for 'My Favorites' & 'Search History' */
  if (window.location.href.indexOf("section=") > -1) {
    jQuery("prm-search-result-list-after").hide();
  } else {
    jQuery("prm-search-result-list-after").show();
  }
  /* detect and highlight current tab */
  //fix issue with browse search text
  //  jQuery("[aria-label='BrowseSearch']").text("Browse Search");
  //array to detect current tab
  var searchTabsList = {
    "search?vid=01UTC_INST": "New Search, opens in a new window",
    "jsearch?": "Journal Search",
    "search?tab=CustomCourseReserves": "Course Reserves, opens in a new window",
    "citationlinker": "Citation Lookup",
    "browse": "UTC Library Browse Search",
    "dbsearch?": "Database Search"
  };
  //cycle through array and set active tab
  jQuery.each(searchTabsList, function (key, value) {
    switch (document.location.href.indexOf(key) > -1) {
      case true:
        jQuery('#mainMenu a').removeClass('active');
        jQuery("[aria-label='" + value + "']").addClass('active');
        break;
    }
  });
  /* insert icon before advanced|basic search */
  if (jQuery("#advanced-search-icon").length == 0) {
    jQuery("<md-icon id='advanced-search-icon' md-svg-icon='primo-ui:close' aria-label='icon-close' class='md-primoExplore-theme' aria-hidden='true'><svg id='close' width='100%' height='100%' viewBox='0 0 24 24' y='240' xmlns='http://www.w3.org/2000/svg' fit='' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='m 11.002979,20.902474 h 1.994042 v -7.905453 h 7.905453 V 11.002979 H 12.997021 V 3.0975256 H 11.002979 V 11.002979 H 3.0975256 v 1.994042 h 7.9054534 z'></path></svg></md-icon>").insertBefore(".switch-to-advanced .layout-row span");
  }
  if (jQuery("#basic-search-icon").length == 0) {
    jQuery("<md-icon id='basic-search-icon'><svg id='advancedSearch' width='100%' height='100%' viewBox='0 0 24 24' y='240' xmlns='http://www.w3.org/2000/svg' fit='' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'></path></svg></md-icon>").insertBefore(".switch-to-simple .layout-row span");
  }
  /*align advanced search select fields */
  jQuery("#advanced-search md-select-value").first().css("margin-left", "70px");
  /* detect # of dbs in View Online */
  jQuery('prm-alma-viewit-items').removeClass();
  if (jQuery("prm-alma-viewit md-list-item").length == 1) {
    jQuery('prm-alma-viewit-items').addClass('one');
  } else {
    jQuery('prm-alma-viewit-items').addClass('many');
  }
  /* grab input and append to worldcat link
  $( "#searchBar" ).keyup(function() {
    var inputString = jQuery('#searchBar').val();
    if (inputString){
      console.log('inputString');
      console.log(inputString);
    }
  });
  
  $.get("https://www.getrave.com/rss/utc/channel1", function(data) {
    var $XML = $(data);
    $XML.find("item").each(function() {
        var $this = $(this),
            item = {
                title:       $this.find("title").text(),
                link:        $this.find("link").text(),
                description: $this.find("description").text(),
                pubDate:     $this.find("pubDate").text()
            };
            if (item.title != "No emergencies at this time"){
              if 
              jQuery("#alert:empty").append("<div id='utc-alert' class='alert alert-danger'><span class='close' style='float: right;cursor:pointer;'>x</span><h2>" + item.title + "</h2><p><small>Posted on date " + item.pubDate + "</small></p><p>" + item.description + "</p><p><a class='btn btn-danger' href='" + item.link + "'>More information…</a></p></div>");
            }
            return false;
    });
  });
  jQuery("#libAlert:empty").append('<!-- BEGIN temp COVID-19 Library Alert --><div id="libraryAlert"><div id="utc-alert" style="margin:0;color:#802020;" class="alert alert-danger"><span class="close" style="float: right;cursor:pointer;">x</span><h3 style="margin-top:0;color:#802020">COVID-19 Library Operations Update</h3><p style="margin: 0;">Check out the <a href="https://utc.edu/library/library-continuity/index.php"><strong>latest on currently available library services</strong></a>.</p></div></div><!-- END temp COVID-19 Library Alert -->');
  jQuery(document).on('click','.close', function() {
    jQuery("#utc-alert").fadeOut();
    jQuery("#libraryAlert").fadeOut();
  });
  */
}, 100);//close setInterval(function()
//chat box only load on pages with chat box

if (window.location.href.indexOf("/discovery/search?") > -1) {
  var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "https://") + "us.libraryh3lp.com/js/libraryh3lp.js?14392"
  var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
}
if (window.location.href.indexOf("&primosearchsubmit=") > -1) {
  console.log("bingo");
  var currentUrl = window.location.href;
  var updatedUrl = currentUrl.replace('&primosearchsubmit=','');
  window.location.replace(updatedUrl);
  console.log("done");
}