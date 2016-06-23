'use strict';

function update(ev) {
  var hratio = ev.screenX / $(window).height();
  var wratio = ev.screenY / $(window).width();

  $(".bg").css("transform", "translate(" + (hratio - 0.5) * 20 + "px, " + (wratio -0.5) * 20 + "px)");
  $(".brand").css("transform", "translate(" + (hratio - 0.5) * 40 + "px, " + (wratio -0.5) * 40 + "px)");
}

$(document).ready(function() {
  $(window).mousemove(update);
  $(window).resize(update);
});
