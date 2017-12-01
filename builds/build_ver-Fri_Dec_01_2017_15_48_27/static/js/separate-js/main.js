var clock;

$(document).ready(function() {
  var clock;

  clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'ru',
        callbacks: {
          stop: function() {
            $('.message').html('The clock has stopped!')
          }
        }
    });

    clock.setTime(getSecondsToTomorrow());
    clock.setCountdown(true);
    clock.start();

    function getSecondsToTomorrow() {
      var now = new Date();

      var dateNeed = 10;
      var dateNeedUse = new Date(now.getFullYear(), now.getMonth(), now.getDate()+dateNeed);

      var diff = dateNeedUse - now;
      return Math.round(diff / 1000);
    }
});
