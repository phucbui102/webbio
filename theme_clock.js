let hand_hour = document.querySelector(".hour");
let hand_minute = document.querySelector(".minute");
let hand_second = document.querySelector(".second");

const auto = () => {
  const newdate = new Date();
  let hour = newdate.getHours();
  let minute = newdate.getMinutes();
  let second = newdate.getSeconds();
  hand_hour.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
  hand_second.style.transform = `rotate(${second * 6}deg)`;
  hand_minute.style.transform = `rotate(${minute * 6}deg)`;
};
setInterval(auto, 1000);
