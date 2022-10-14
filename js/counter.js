var deadline = new Date("12/16/22 07:30").getTime();

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

  // verify 3040
  if (match == 2) {
      document.getElementsByTagName("body")[0].className = "d3040";
      document.getElementsByTagName("footer")[0].className = "hide";
  } else {
      document.getElementsByTagName("body")[0].className = "";
      document.getElementsByTagName("footer")[0].className = "";
  };

}, 1000);
