const container = document.getElementById('container');
const illuminatedItem = document.querySelector('.illuminated-item');
const flashlight = document.querySelector('.flashlight');
const blurFilter = document.querySelector('#blur-filter feGaussianBlur');



const lightRadius = 500;
const flashlightOffset = lightRadius / 2;

flashlight.style.width = flashlight.style.height = `${lightRadius}px`;
const filterIntensity = 30;
blurFilter.setAttribute('stdDeviation', filterIntensity);

const followMouseFlashlight = ({ clientX, clientY }) => {
    const { left, top } = illuminatedItem.getBoundingClientRect();
    flashlight.style.left = `${clientX - left - flashlightOffset}px`;
    flashlight.style.top = `${clientY - top - flashlightOffset}px`;
  };

container.addEventListener('mousemove', followMouseFlashlight);

function playd() {
    var audiod = document.getElementById("audiod");
    audiod.cloneNode().play()
  }

  function playu() {
    var audiou = document.getElementById("audiou");
    audiou.cloneNode().play()
  }
