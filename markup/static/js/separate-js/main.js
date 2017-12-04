var clock;$(document).ready(function(){
  var clock;
  clock=$('.clock').FlipClock({clockFace:'DailyCounter',autoStart:false,language:'ru',callbacks:{stop:function(){
    $('.message').html('Время вышло')
  }
  }});clock.setTime(getSecondsToTomorrow());clock.setCountdown(true);clock.start();
function getSecondsToTomorrow(){
  var dt = "December 03 2017 14:22:00";
  var first = new Date(dt);
  var last = Date.now();

  var diff=first-last;
  return Math.round(diff/1000);
}});
