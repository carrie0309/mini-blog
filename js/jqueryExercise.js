$("button.continue").html("Next Step...");

var hiddenBox = $("#banner-message");

$("#button-container #btnShow").on("click", function(event) {
  hiddenBox.fadeIn();

});
$("#button-container #btnHide").on("click", function(event) {
  hiddenBox.fadeOut();

});
$("#button-container #btnToggle").on("click", function(event) {
  hiddenBox.toggle();

});

function blink(times) {
  for (var i = 0; i < times; i++) {
    $("#block").animate({
      width: "500px",
      marginLeft: "-250px",
      fontSize: "5em"
    }, 1000);

    $("#block").animate({
      width: "300px",
      marginLeft: "-150px",
      fontSize: "3em"
    }, 1000);
  }

}

$("#go").click(function() {
  $("#block").animate({
    left: "50%",
    marginLeft: '-150px'
  }, 1000);

  blink(3);

 $("#block").animate({
    left: "-350px",
    // marginLeft: '-150px'
  }, 1000);

});
