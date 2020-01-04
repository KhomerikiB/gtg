$(document).ready(function() {
  const callBackBox = $(".call-back-container .wrapper");
  $(".tours-slider").owlCarousel({
    stagePadding: 350,
    loop: true,
    margin: 40,
    nav: true,
    navText: [
      "<div class='prev'><img src='./images/slider-arrow.svg'></div>",
      "<div class='next'><img src='./images/slider-arrow.svg'></div>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  });
  // Hide on click outside
  $(document).on("click", function(event) {
    if (!$(event.target).closest(callBackBox).length) {
      $(callBackBox).removeClass("active");
    }
    if (!$(event.target).closest(".language").length) {
      $(".language").removeClass("active");
    }
  });

  $(".phone-header-btn").click(function(event) {
    event.stopPropagation();
    $(callBackBox).toggleClass("active");
  });
  $(".call-back-header .close").click(function(event) {
    event.stopPropagation();
    $(callBackBox).removeClass("active");
  });
  $(".language").click(function() {
    $(this).addClass("active");
  });
  $("#search").click(function() {
    $(".search-popup").addClass("active");
  });
  $(".search-popup .close").click(function() {
    $(".search-popup").removeClass("active");
  });
});
