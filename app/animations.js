/**
* animations.js
* (C) Yes And Games 2016
* Nick Rabb (nrabb@outlook.com)
* A javascript file to manage animations with events
*/

function anim8(id, className, duration, after) {
  var el = $("#" + id);
  if (!el.hasClass(className)) {
    el.addClass(className);
    setTimeout(function (el) {
      $("#" + id).addClass("anim-pause");
      after();
    }, duration);
  } else {
    after();
    el.removeClass("anim-pause");
    setTimeout(function (el) {
      $("#" + id).removeClass(className);
    }, duration);
  }
}

function toggleBottomMenu() {
  var menu = $("#bottom-menu-icons");
  if (menu.attr("style") === 'display: none;') {
    menu.fadeIn();
  } else {
    menu.fadeOut();
  }
//  $("bottom-menu").children()[0].setAttribute("style")
}