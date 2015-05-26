$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500, function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
    });
    /* When you press 'x' Ryu will stand with utter coolness*/
    $(document).keydown(function(event) {
        if(event.which == 88) {
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').show();
        }
    })
    .keyup(function(event) {
        if(event.which == 88) {
          $('.ryu-ready').hide();
          $('.ryu-throwing').hide();
          $('.ryu-cool').hide();
          $('.ryu-still').show();
        }
    });
});

/* This is for music */
function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }