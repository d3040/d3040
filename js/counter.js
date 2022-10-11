var deadline = new Date("12/16/22 09:00").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementsByTagName("p")[0].innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
}, 1000);
