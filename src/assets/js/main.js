var userFeed = new Instafeed({
  get: 'user',
  userId: '3627696401',
  accessToken: '3627696401.1677ed0.9d11b86409244730b3a34531ef97a9fd',
  resolution: 'standard_resolution',
  limit: 3,
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><i>{{caption}}</i></a>',
});

userFeed.run();

//$("img.lazy").lazyload();

// ======================================================================
//
// Tabs
//
// ======================================================================

$(function () {
  $('.tabs__nav li').first().addClass('active');
  $('.tab__drawer').first().addClass('active');
  $('.tab__content').hide().first().show();

  // when tabs are tabs
  $('.tabs__nav li').click(function () {

    $('.tab__content').hide();
    var activeTab = $(this).attr('rel');
    $('#' + activeTab).fadeIn();

    $('.tabs__nav li').removeClass('active');
    $(this).addClass('active');

    $('.tab__drawer').removeClass('active');
    $('.tab__drawer[rel^="' + activeTab + '"]').addClass('active');

  });

  // when tabs are accordions
  $('.tab__drawer').click(function () {

    $('.tab__drawer').removeClass('active');
    $(this).addClass('active');

    $('.tab__content').slideUp({
      duration: 400
    });
    var a_activeTab = $(this).attr('rel');
    $('#' + a_activeTab).slideDown({
      duration: 400
    });

    $('.tabs__nav li').removeClass('active');
    $('.tabs__nav li[rel^="' + a_activeTab + '"]').addClass('active');

  });

});

// ======================================================================
//
// Tabs
//
// ======================================================================

$(function () {
  $('.tabsalt__nav li').first().addClass('active');
  $('.tabalt__drawer').first().addClass('active');
  $('.tabalt__content').hide().first().show();

  // when tabs are tabs
  $('.tabsalt__nav li').click(function () {

    $('.tabalt__content').hide();
    var activeTabalt = $(this).attr('rel');
    $('#' + activeTabalt).fadeIn();

    $('.tabsalt__nav li').removeClass('active');
    $(this).addClass('active');

    $('.tabalt__drawer').removeClass('active');
    $('.tabalt__drawer[rel^="' + activeTabalt + '"]').addClass('active');

  });

  // when tabs are accordions
  $('.tabalt__drawer').click(function () {

    $('.tabalt__drawer').removeClass('active');
    $(this).addClass('active');

    $('.tabalt__content').slideUp({
      duration: 400
    });
    var a_activeTabalt = $(this).attr('rel');
    $('#' + a_activeTabalt).slideDown({
      duration: 400
    });

    $('.tabsalt__nav li').removeClass('active');
    $('.tabsalt__nav li[rel^="' + a_activeTabalt + '"]').addClass('active');

  });

});


//
//
// Projects Tabs
//
//

$(function() {

  var project = $('.project-category');
  var logos = $('.cleint-logos');

  project.first().addClass('is--active');
  $('.projects-nav li').first().addClass('is--active');
  project.hide().first().fadeIn();
  logos.hide().first().show();

  // When tabs are tabs
  $('.projects-nav li').click(function() {

    var activeProject = $(this).attr('rel');
    $('.projects-nav li').removeClass('is--active');
    $(this).addClass('is--active');
    project.removeClass('is--active').fadeOut();
    logos.hide();
    project.find('img').removeClass('is--active');
    $('#' + activeProject).addClass('is--active').fadeIn();
    $('#' + activeProject).find('img').first().addClass('is--active');
    $('.' + activeProject).show();

  });


});

//
//
// Projects Lightbox
//
//

 (function($) {

  $.fn.nextInDOM = function(selector) {
    // NOTE: if multiple elements specified, only the first is considered
    var element = this;
    if(this.length > 1) element = this.first();
    return nextInDOM(selector?selector:'*', element, $('*').length, $('*').last());
  };

  $.fn.prevInDOM = function(selector) {
    // NOTE: if multiple elements specified, only the first is considered
    var element = this;
    if(this.length > 1) element = this.first();
    return prevInDOM(selector?selector:'*', element, $('*').length, $('*').first());
  };

  // next in dom implementation
  function nextInDOM(_selector, _subject, _maxNodes, _lastNode) {
    var nid = $(), next = getNext(_subject, _lastNode), iters = 1;
    $('html, body').addClass('cSeen');
      while(next.length != 0) {
      if(iters > _maxNodes) return $();
      if(next.is(_selector)) {
        nid = next;
        break;
      }
          next = getNext(next, _lastNode);
      iters++;
      }
      $('.cSeen').removeClass('cSeen');
      return nid;
  }

  /*
  finding next (e) {
    if e has children & !e.traversed
      n = e.children.first
    else if e has next
      n = e.next
    else if e has parent
      e.parent.traversed = true
      n = next(e.parent)
    else n = null;
  }
  */
  function getNext(_subject, _lastNode) {
    if(_subject[0] == _lastNode[0]) return $();
    if(!(_subject.hasClass('cSeen')) && _subject.children().length > 0) return _subject.children().first();
    else if(_subject.next().length > 0) return _subject.next();
    else if (_subject.parent().length > 0) {
      _subject.parent().addClass('cSeen');
      return getNext(_subject.parent(), _lastNode);
    }
      return $();
  }

  // prev in dom implementation
  function prevInDOM(_selector, _subject, _maxNodes, _firstNode) {
      var prev = getPrev(_subject, _firstNode), iters = 1;
    while(prev.length != 0) {
      if(iters > _maxNodes) return $();
        if(prev.is(_selector)) return prev;
        prev = getPrev(prev, _firstNode);
      iters++;
      }
      return $();
  }

  /*
  if e has prev and e.prev has children {
    n = deepest and farthest child of e.prev
  }
  else if e has prev {
    n = e.prev
  }
  else if e has parent {
    n = e.parent
  }
  */
  function getPrev(_subject, _firstNode) {
    if(_subject[0] == _firstNode[0]) return $();
      if(_subject.prev().length > 0 && _subject.prev().children().length > 0) {
      var p = _subject.prev().children().last();
      while(p.children().length > 0) p = p.children().last();
      return p;
    }
    else if(_subject.prev().length > 0) {
      return _subject.prev();
    }
    else if(_subject.parent().length > 0) {
      return _subject.parent();
    }
    return $();
  }

})(jQuery);

var image1 = $('#tab1 img');
var image2 = $('#tab2 img');
var image3 = $('#tab3 img');
var image4 = $('#tab4 img');
var image5 = $('#tab5 img');
var image6 = $('#tab6 img');

image1.first().addClass('is--active');

var activeImage = $('img.is--active');
var lightbox = $('.lightbox');
var overlay = $('.overlay');
var lightboxImage = $('.lightbox img');
var lightboxTitle = $('.lightbox-title');
var next = $('.lightbox-next');
var prev = $('.lightbox-prev');

image1.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

image2.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

image3.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

image4.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

image5.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

image6.click(function() {
  var thisSrc = $(this).attr('src');
  var thisTitle = $(this).parent().attr('data-project');
  $('img.is--active').removeClass('is--active');
  $(this).addClass('is--active');

  lightboxImage.attr('src', thisSrc);
  lightboxTitle.html(thisTitle);
  lightbox.addClass('is--active');
  overlay.addClass('is--active');

});

next.click(function() {
  var nextImage = $('img.is--active').nextInDOM('img');
  var nextTitle = $('img.is--active').nextInDOM('.project-image').attr('data-project');
  var nextSrc = nextImage.attr('src');

  $('img.is--active').removeClass('is--active');
  nextImage.addClass('is--active');
  lightboxImage.attr('src', nextSrc);
  lightboxTitle.html(nextTitle);
});

prev.click(function() {
  var prevImage = $('img.is--active').prevInDOM('img');
  var prevTitle = $('img.is--active').parent().prevInDOM('.project-image').attr('data-project');
  var prevSrc = prevImage.attr('src');

  $('img.is--active').removeClass('is--active');
  prevImage.addClass('is--active');
  lightboxImage.attr('src', prevSrc);
  lightboxTitle.html(prevTitle);
});

overlay.click(function() {
  $(this).removeClass('is--active');
  overlay.removeClass('is--active');
  lightbox.removeClass('is--active');
});

//
//
// Menu
//
//

var menuTrigger = $('.menu-trigger');
var menu = $('.menu');

menuTrigger.click(function() {
  $(this).toggleClass('is--active');
  menu.toggleClass('is--active')
});

//
//
// Loader
//
//

window.onload = function() {
    $('.main').addClass('is--loaded');
    $('.loader').addClass('is--loaded');
    $('body').addClass('is--loaded');
};

var borderLeft = $('.border-left');
var borderRight = $('.border-right');
var borderBottom = $('.border-bottom');
var heroContent = $('.hero__content');
var heroContentBG = $('.hero__content-background');

var nav = $('.nav');
var navHeight = nav.outerHeight();

borderLeft.css('width', navHeight);
borderRight.css('width', navHeight);
borderBottom.css('height', navHeight);
heroContent.css('left', navHeight);

var heroContentHeight = heroContent.outerHeight();
var heroContentWidth = heroContent.outerWidth();

var heroContentPosition = heroContent.position();

heroContentBG.css('left', heroContentPosition.left);
heroContentBG.css('top', heroContentPosition.top);
heroContentBG.css('height', heroContentHeight);
heroContentBG.css('width', heroContentWidth);

var hpContact = $('.hp-contact-content');
var hpContactBG = $('.hp-contact-background');

var hpContactHeight = hpContact.outerHeight();
var hpContactWidth = hpContact.outerWidth();
var hpContactPosition = hpContact.position();

hpContactBG.css('left', hpContactPosition.left);
hpContactBG.css('top', hpContactPosition.top);
hpContactBG.css('height', hpContactHeight);
hpContactBG.css('width', hpContactWidth);


//
//
// About Parallax
//
//

// var controller = new ScrollMagic.Controller();

// var homeAboutImage = document.querySelector('.hp-about__image');
// var homeAbout = document.querySelector('.hp-about');


//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.fromTo(homeAboutImage, 1, {y: "10%"}, {y: "-10%", ease: Sine.easeNone}),
//         ]);

//     // build scene
//     var scene = new ScrollMagic.Scene({triggerElement: homeAbout, duration: $(window).width(), offset: -100})
//                     .setTween(tween)
//                     .addTo(controller);

//
//
// Counters
//
//

var statsController = new ScrollMagic.Controller();

var statsScene = new ScrollMagic.Scene({triggerElement: $('.stats'), duration: 100, offset: -400})
    .setClassToggle('.number', 'is--counting')
    .addTo(statsController);

$('.number.is--counting').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//
//
// Sliders
//
//

  // Projects
  $('.projects-content').slick({
    arrows: false,
    dots: true,
    speed: 900,
    infinite: true,
    autoplay: false,
    draggable: false,
    vertical: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  });

  $('.slick-dots button').empty();

  //Clients
  $('.client-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false
});

//
//
// Form Group
//
//

var formGroup = $('.form-group');
var input = formGroup.find('input, textarea');

$(input).on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('is--typed', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

//
//
// Map
//
//

$(function () {
          var map = new GMaps({
          el: "#map",
          lat: 42.297642,
          lng: -82.942871,
          zoom: 15,
          zoomControl : true,
          zoomControlOpt: {
            style : "SMALL",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });

          map.addMarker({
  lat: 42.297642,
  lng: -82.942871,
  title: 'Fortis Group',
  icon: 'https://res.cloudinary.com/darkroast-digital/image/upload/v1510152415/fortis/icon-location.png'
});

          var $main_color = '#3E8CB2',
          $saturation= -20,
          $brightness= 5;

        var styles = [
    {
      //set saturation for the labels on the map
      elementType: "labels",
      stylers: [
        {saturation: $saturation}
      ]
    },
      { //poi stands for point of interest - don't show these lables on the map
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show highways lables on the map
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
              {visibility: "off"}
          ]
      },
    {
      //don't show local road lables on the map
      featureType: "road.local",
      elementType: "labels.icon",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show arterial road lables on the map
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show road lables on the map
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {visibility: "off"}
      ]
    },
    //style different elements on the map
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.government",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.sport_complex",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.attraction",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "landscape",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]

    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    }
  ];

        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
      });

//
//
// Smooth Scroll
//
//

// $(function(){

//     var $window = $(window);        //Window object

//     var scrollTime = 1;           //Scroll time
//     var scrollDistance = 30;       //Distance. Use smaller value for shorter scroll and greater value for longer scroll

//     $window.on("mousewheel DOMMouseScroll", function(event){

//         event.preventDefault();

//         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//         var scrollTop = $window.scrollTop();
//         var finalScroll = scrollTop - parseInt(delta*scrollDistance);

//         TweenMax.to($window, scrollTime, {
//             scrollTo : { y: finalScroll, autoKill:true },
//                 ease: Sine.easeOut,  //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
//                 autoKill: true,
//                 overwrite: 5
//             });

//     });

// });

//FORM =======================================

var careersForm = $('#careers-form');
var formMessages = $('.form-messages');

$(careersForm).submit(function (event) {
      event.preventDefault();
      //grab all form data
      var formData = new FormData($(this)[0]);

      $.ajax({
          url: $(careersForm).attr('action'),
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (returndata) {
              $(formMessages).html('Thanks for your interest in working at Fortis Group.  We\'ll be in touch soon!');

              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');

              $('#careers-form input').val('');
              $('#careers-form textarea').val('');
          },
          error: function () {
              $(formMessages).html('Oh no!  Something went wrong, give it a try agian.');

              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');

              $('#careers-form input').val('');
              $('#careers-form textarea').val('');
          }
      });

      return false;
  });

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.flexibility=e()}}(function(){return function e(t,r,l){function n(f,i){if(!r[f]){if(!t[f]){var s="function"==typeof require&&require;if(!i&&s)return s(f,!0);if(o)return o(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[f]={exports:{}};t[f][0].call(c.exports,function(e){var r=t[f][1][e];return n(r?r:e)},c,c.exports,e,t,r,l)}return r[f].exports}for(var o="function"==typeof require&&require,f=0;f<l.length;f++)n(l[f]);return n}({1:[function(e,t,r){t.exports=function(e){var t,r,l,n=-1;if(e.lines.length>1&&"flex-start"===e.style.alignContent)for(t=0;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"space-between"===e.style.alignContent)for(r=e.flexStyle.crossSpace/(e.lines.length-1),t=0;l=e.lines[++n];)l.crossStart=t,t+=l.cross+r;else if(e.lines.length>1&&"space-around"===e.style.alignContent)for(r=2*e.flexStyle.crossSpace/(2*e.lines.length),t=r/2;l=e.lines[++n];)l.crossStart=t,t+=l.cross+r;else for(r=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;l=e.lines[++n];)l.crossStart=t,l.cross+=r,t+=l.cross}},{}],2:[function(e,t,r){t.exports=function(e){for(var t,r=-1;line=e.lines[++r];)for(t=-1;child=line.children[++t];){var l=child.style.alignSelf;"auto"===l&&(l=e.style.alignItems),"flex-start"===l?child.flexStyle.crossStart=line.crossStart:"flex-end"===l?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===l?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(e,t,r){t.exports=function l(e,l){var t="row"===l||"row-reverse"===l,r=e.mainAxis;if(r){var n=t&&"inline"===r||!t&&"block"===r;n||(e.flexStyle={main:e.flexStyle.cross,cross:e.flexStyle.main,mainOffset:e.flexStyle.crossOffset,crossOffset:e.flexStyle.mainOffset,mainBefore:e.flexStyle.crossBefore,mainAfter:e.flexStyle.crossAfter,crossBefore:e.flexStyle.mainBefore,crossAfter:e.flexStyle.mainAfter,mainInnerBefore:e.flexStyle.crossInnerBefore,mainInnerAfter:e.flexStyle.crossInnerAfter,crossInnerBefore:e.flexStyle.mainInnerBefore,crossInnerAfter:e.flexStyle.mainInnerAfter,mainBorderBefore:e.flexStyle.crossBorderBefore,mainBorderAfter:e.flexStyle.crossBorderAfter,crossBorderBefore:e.flexStyle.mainBorderBefore,crossBorderAfter:e.flexStyle.mainBorderAfter})}else t?e.flexStyle={main:e.style.width,cross:e.style.height,mainOffset:e.style.offsetWidth,crossOffset:e.style.offsetHeight,mainBefore:e.style.marginLeft,mainAfter:e.style.marginRight,crossBefore:e.style.marginTop,crossAfter:e.style.marginBottom,mainInnerBefore:e.style.paddingLeft,mainInnerAfter:e.style.paddingRight,crossInnerBefore:e.style.paddingTop,crossInnerAfter:e.style.paddingBottom,mainBorderBefore:e.style.borderLeftWidth,mainBorderAfter:e.style.borderRightWidth,crossBorderBefore:e.style.borderTopWidth,crossBorderAfter:e.style.borderBottomWidth}:e.flexStyle={main:e.style.height,cross:e.style.width,mainOffset:e.style.offsetHeight,crossOffset:e.style.offsetWidth,mainBefore:e.style.marginTop,mainAfter:e.style.marginBottom,crossBefore:e.style.marginLeft,crossAfter:e.style.marginRight,mainInnerBefore:e.style.paddingTop,mainInnerAfter:e.style.paddingBottom,crossInnerBefore:e.style.paddingLeft,crossInnerAfter:e.style.paddingRight,mainBorderBefore:e.style.borderTopWidth,mainBorderAfter:e.style.borderBottomWidth,crossBorderBefore:e.style.borderLeftWidth,crossBorderAfter:e.style.borderRightWidth},"content-box"===e.style.boxSizing&&("number"==typeof e.flexStyle.main&&(e.flexStyle.main+=e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),"number"==typeof e.flexStyle.cross&&(e.flexStyle.cross+=e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter));e.mainAxis=t?"inline":"block",e.crossAxis=t?"block":"inline","number"==typeof e.style.flexBasis&&(e.flexStyle.main=e.style.flexBasis+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),e.flexStyle.mainOuter=e.flexStyle.main,e.flexStyle.crossOuter=e.flexStyle.cross,"auto"===e.flexStyle.mainOuter&&(e.flexStyle.mainOuter=e.flexStyle.mainOffset),"auto"===e.flexStyle.crossOuter&&(e.flexStyle.crossOuter=e.flexStyle.crossOffset),"number"==typeof e.flexStyle.mainBefore&&(e.flexStyle.mainOuter+=e.flexStyle.mainBefore),"number"==typeof e.flexStyle.mainAfter&&(e.flexStyle.mainOuter+=e.flexStyle.mainAfter),"number"==typeof e.flexStyle.crossBefore&&(e.flexStyle.crossOuter+=e.flexStyle.crossBefore),"number"==typeof e.flexStyle.crossAfter&&(e.flexStyle.crossOuter+=e.flexStyle.crossAfter)}},{}],4:[function(e,t,r){var l=e("../reduce");t.exports=function(e){if(e.mainSpace>0){var t=l(e.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0);t>0&&(e.main=l(e.children,function(r,l){return"auto"===l.flexStyle.main?l.flexStyle.main=l.flexStyle.mainOffset+parseFloat(l.style.flexGrow)/t*e.mainSpace:l.flexStyle.main+=parseFloat(l.style.flexGrow)/t*e.mainSpace,l.flexStyle.mainOuter=l.flexStyle.main+l.flexStyle.mainBefore+l.flexStyle.mainAfter,r+l.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],5:[function(e,t,r){var l=e("../reduce");t.exports=function(e){if(e.mainSpace<0){var t=l(e.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0);t>0&&(e.main=l(e.children,function(r,l){return l.flexStyle.main+=parseFloat(l.style.flexShrink)/t*e.mainSpace,l.flexStyle.mainOuter=l.flexStyle.main+l.flexStyle.mainBefore+l.flexStyle.mainAfter,r+l.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],6:[function(e,t,r){var l=e("../reduce");t.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var r,n=-1;r=e.children[++n];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+r.flexStyle.mainOuter?(t.main+=r.flexStyle.mainOuter,t.cross=Math.max(t.cross,r.flexStyle.crossOuter)):e.lines.push(t={main:r.flexStyle.mainOuter,cross:r.flexStyle.crossOuter,children:[]}),t.children.push(r);e.flexStyle.mainLines=l(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=l(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},{"../reduce":12}],7:[function(e,t,r){function l(t){for(var r,l=-1;r=t.children[++l];)e("./flex-direction")(r,t.style.flexDirection);e("./flex-direction")(t,t.style.flexDirection),e("./order")(t),e("./flexbox-lines")(t),e("./align-content")(t),l=-1;for(var n;n=t.lines[++l];)n.mainSpace=t.flexStyle.main-t.flexStyle.mainInnerBefore-t.flexStyle.mainInnerAfter-t.flexStyle.mainBorderBefore-t.flexStyle.mainBorderAfter-n.main,e("./flex-grow")(n),e("./flex-shrink")(n),e("./margin-main")(n),e("./margin-cross")(n),e("./justify-content")(n,t.style.justifyContent,t);e("./align-items")(t)}t.exports=l},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(e,t,r){t.exports=function(e,t,r){var l,n,o,f=r.flexStyle.mainInnerBefore,i=-1;if("flex-end"===t)for(l=e.mainSpace,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter;else if("center"===t)for(l=e.mainSpace/2,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter;else if("space-between"===t)for(n=e.mainSpace/(e.children.length-1),l=0,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter+n;else if("space-around"===t)for(n=2*e.mainSpace/(2*e.children.length),l=n/2,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter+n;else for(l=0,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter}},{}],9:[function(e,t,r){t.exports=function(e){for(var t,r=-1;t=e.children[++r];){var l=0;"auto"===t.flexStyle.crossBefore&&++l,"auto"===t.flexStyle.crossAfter&&++l;var n=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=n/l),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=n/l),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},{}],10:[function(e,t,r){t.exports=function(e){for(var t,r=0,l=-1;t=e.children[++l];)"auto"===t.flexStyle.mainBefore&&++r,"auto"===t.flexStyle.mainAfter&&++r;if(r>0){for(l=-1;t=e.children[++l];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/r),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/r),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},{}],11:[function(e,t,r){var l=/^(column|row)-reverse$/;t.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),l.test(e.style.flexDirection)&&e.children.reverse()}},{}],12:[function(e,t,r){function l(e,t,r){for(var l=e.length,n=-1;++n<l;)n in e&&(r=t(r,e[n],n));return r}t.exports=l},{}],13:[function(e,t,r){function l(e){i(f(e))}var n=e("./read"),o=e("./write"),f=e("./readAll"),i=e("./writeAll");t.exports=l,t.exports.read=n,t.exports.write=o,t.exports.readAll=f,t.exports.writeAll=i},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(e,t,r){function l(e,t,r){var l=e[t],f=String(l).match(o);if(!f){var a=t.match(s);if(a){var c=e["border"+a[1]+"Style"];return"none"===c?0:i[l]||0}return l}var y=f[1],x=f[2];return"px"===x?1*y:"cm"===x?.3937*y*96:"in"===x?96*y:"mm"===x?.3937*y*96/10:"pc"===x?12*y*96/72:"pt"===x?96*y/72:"rem"===x?16*y:n(l,r)}function n(e,t){f.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(f,t.nextSibling);var r=f.offsetWidth;return t.parentNode.removeChild(f),r}t.exports=l;var o=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,f=document.createElement("div"),i={medium:4,none:0,thick:6,thin:2},s=/^border(Bottom|Left|Right|Top)Width$/},{}],15:[function(e,t,r){function l(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"},r=e instanceof Element;if(r){var l=e.hasAttribute("data-style"),i=l?e.getAttribute("data-style"):e.getAttribute("style")||"";l||e.setAttribute("data-style",i);var s=window.getComputedStyle&&getComputedStyle(e)||{};f(t,s);var c=e.currentStyle||{};n(t,c),o(t,i);for(var y in t)t[y]=a(t,y,e);var x=e.getBoundingClientRect();t.offsetHeight=x.height||e.offsetHeight,t.offsetWidth=x.width||e.offsetWidth}var S={element:e,style:t};return S}function n(e,t){for(var r in e){var l=r in t;if(l)e[r]=t[r];else{var n=r.replace(/[A-Z]/g,"-$&").toLowerCase(),o=n in t;o&&(e[r]=t[n])}}var f="-js-display"in t;f&&(e.display=t["-js-display"])}function o(e,t){for(var r;r=i.exec(t);){var l=r[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()});e[l]=r[2]}}function f(e,t){for(var r in e){var l=r in t;l&&!s.test(r)&&(e[r]=t[r])}}t.exports=l;var i=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,s=/^(alignSelf|height|width)$/,a=e("./getComputedLength")},{"./getComputedLength":14}],16:[function(e,t,r){function l(e){var t=[];return n(e,t),t}function n(e,t){for(var r,l=o(e),i=[],s=-1;r=e.childNodes[++s];){var a=3===r.nodeType&&!/^\s*$/.test(r.nodeValue);if(l&&a){var c=r;r=e.insertBefore(document.createElement("flex-item"),c),r.appendChild(c)}var y=r instanceof Element;if(y){var x=n(r,t);if(l){var S=r.style;S.display="inline-block",S.position="absolute",x.style=f(r).style,i.push(x)}}}var m={element:e,children:i};return l&&(m.style=f(e).style,t.push(m)),m}function o(e){var t=e instanceof Element,r=t&&e.getAttribute("data-style"),l=t&&e.currentStyle&&e.currentStyle["-js-display"],n=i.test(r)||s.test(l);return n}t.exports=l;var f=e("../read"),i=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,s=/^(inline-)?flex$/i},{"../read":15}],17:[function(e,t,r){function l(e){o(e);var t=e.element.style,r="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=n(e.flexStyle[r[0]]-e.flexStyle[r[0]+"InnerBefore"]-e.flexStyle[r[0]+"InnerAfter"]-e.flexStyle[r[0]+"BorderBefore"]-e.flexStyle[r[0]+"BorderAfter"]),t.height=n(e.flexStyle[r[1]]-e.flexStyle[r[1]+"InnerBefore"]-e.flexStyle[r[1]+"InnerAfter"]-e.flexStyle[r[1]+"BorderBefore"]-e.flexStyle[r[1]+"BorderAfter"]);for(var l,f=-1;l=e.children[++f];){var i=l.element.style,s="inline"===l.mainAxis?["main","cross"]:["cross","main"];i.boxSizing="content-box",i.display="block",i.position="absolute","auto"!==l.flexStyle[s[0]]&&(i.width=n(l.flexStyle[s[0]]-l.flexStyle[s[0]+"InnerBefore"]-l.flexStyle[s[0]+"InnerAfter"]-l.flexStyle[s[0]+"BorderBefore"]-l.flexStyle[s[0]+"BorderAfter"])),"auto"!==l.flexStyle[s[1]]&&(i.height=n(l.flexStyle[s[1]]-l.flexStyle[s[1]+"InnerBefore"]-l.flexStyle[s[1]+"InnerAfter"]-l.flexStyle[s[1]+"BorderBefore"]-l.flexStyle[s[1]+"BorderAfter"])),i.top=n(l.flexStyle[s[1]+"Start"]),i.left=n(l.flexStyle[s[0]+"Start"]),i.marginTop=n(l.flexStyle[s[1]+"Before"]),i.marginRight=n(l.flexStyle[s[0]+"After"]),i.marginBottom=n(l.flexStyle[s[1]+"After"]),i.marginLeft=n(l.flexStyle[s[0]+"Before"])}}function n(e){return"string"==typeof e?e:Math.max(e,0)+"px"}t.exports=l;var o=e("../flexbox")},{"../flexbox":7}],18:[function(e,t,r){function l(e){for(var t,r=-1;t=e[++r];)n(t)}t.exports=l;var n=e("../write")},{"../write":17}]},{},[13])(13)});
