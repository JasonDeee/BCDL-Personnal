// Scroll

const body = document.body;
const main = document.getElementById("scroll");

const left = document.querySelector(".left"),
  right = document.querySelector(".right");

var // sx = 0, // For scroll positions
  sy = 0;
var // dx = sx, // For container positions And Force (Percentage 70% Recommended)
  dy = sy,
  Force = 77;
//

const wheelValidate = (e) => {
  var isTouchPad = e.wheelDeltaY
    ? e.wheelDeltaY === -3 * e.deltaY
    : e.deltaMode === 0;

  Force = isTouchPad ? 800 : 77;
};

const touch = () => {
  Force = 800;
};
//

window.addEventListener("wheel", wheelValidate);
window.addEventListener("touchstart", touch);

var resetHeight = () => {
  body.style.height = Math.floor(main.clientHeight) + "px";
};
resetHeight();

var ES = () => {
  sy = window.pageYOffset;
};
var resizer = () => {
  let resizeTimeOut = setTimeout(() => {
    resetHeight();
    clearTimeout(resizeTimeOut);
  }, 1222);
};
window.addEventListener("resize", resizer);
window.addEventListener("scroll", ES);
function li(a, b, n) {
  return (1 - n) * a + n * b;
}

function render() {
  //We calculate our container position by linear interpolation method
  dy = li(dy, sy, Force / 1000);

  dy = Math.floor(dy * 100) / 100;

  right.style.transform = `translateY(-${dy}px)`;
  left.style.transform = `translateY(${dy}px)`;

  window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);

const videoHeader = document.querySelectorAll(".layout_sec1 video");

const playvideo = () => {
  videoHeader[0].pause();
  videoHeader[1].pause();

  videoHeader[0].currentTime = 0;
  videoHeader[1].currentTime = 0;

  var VideotimeOut = setTimeout(() => {
    videoHeader[1].play();
    videoHeader[0].play();
    clearTimeout(VideotimeOut);
  }, 111);
};

playvideo();
