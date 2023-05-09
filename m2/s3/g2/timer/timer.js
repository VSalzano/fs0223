let timer = document.getElementById("timer");

setInterval(() => {
  if (sessionStorage.getItem("time") == null) {
    sessionStorage.setItem("time", "0");
  } else {
    let time = Number(sessionStorage.getItem("time"));
    timer.innerText = time;
    time++;
    sessionStorage.setItem("time", time);
  }
}, 1000);
