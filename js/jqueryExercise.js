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



function blink(elementSelector, times) {
  var element = $(elementSelector);
  for (var i = 0; i < times; i++) {

    element.animate({
      width: "700px",
      // marginLeft: "-250px",
      fontSize: "5em"
    }, 1000, function() {
      $('html,body').animate({
        scrollTop: element.offset().top
      });
    });


    element.animate({
        width: "300px",
        // marginLeft: "-150px",
        fontSize: "3em"
      }, 1000, function() {

      });

    }


  }

  $("#btnShow").click(function() {
    blink('#banner-message', 1);
  });


  $("#go").click(function() {
    var block = $("#block");
    block.animate({
      left: "50%",
      height: "800px",
      marginLeft: '-150px'
    }, 1000, function() {
      console.log('shenxiaoyang');
    });

    blink('#block', 3);

    block.animate({
      left: "-350px",
      // marginLeft: '-150px'
    }, 1000,function(){
      $('html,body').animate({
        scrollTop: 0
      });
    });

  });

  $(".continue").on("click", function(event) {
    alert('Please log in first');
  });
