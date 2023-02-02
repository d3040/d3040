var deadline = new Date("2023-03-01 00:00").getTime();
var colors = new Array("azul","rosa","verde", "naranja","azul2");
i = 0;

setInterval(function() {
  var match = 0;
  var now = new Date().getTime();
  var t = deadline - now;
  //get days
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  //get hours
  var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  // get minutes
  var minutes = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60));
  if (minutes == 30) {
      match = match + 1;
  };
  // get seconds
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (seconds == 40) {
      match = match + 1;
  };

  document.getElementsByTagName("p")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + 's';

  // verify 3040, if true change background color from count
  document.getElementsByTagName("p")[0].className = colors[i];
  i = i + 1;
  if (i == colors.length) {
    i = 0;
  };

}, 1000);
