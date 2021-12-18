$(".timeline").each(function() {
  var divHeight = 0;
  $(".timeline-item:not(:last-child)", this).each(function() {
    divHeight += $(this).height() + 19;
  });
  $(this)
    .find(".line")
    .css("height", divHeight);
});
