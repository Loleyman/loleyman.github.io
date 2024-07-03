const container = document.getElementById('container');
const illuminatedItem = document.querySelector('.illuminated-item');
const flashlight = document.querySelector('.flashlight');
const blurFilter = document.querySelector('#blur-filter feGaussianBlur');
const logoText = document.getElementById("logotext");

var fontNum = 1;

const lightRadius = 500;
const flashlightOffset = lightRadius / 2;

flashlight.style.width = flashlight.style.height = `${lightRadius}px`;
const filterIntensity = 40;
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
    fontNum += 1;
    switch(fontNum) {
      case 2:
        logoText.style.fontFamily = "Caveat,cursive";
        break;
      case 3:
        logoText.style.fontFamily = "Lobster,sans-serif";
        break;
      case 4:
        logoText.style.fontFamily = "Tiny5, sans-serif";
        break;
      case 5:
        logoText.style.fontFamily = "Chakra Petch,sans-serif";
        break;
      case 6:
        logoText.style.fontFamily = "LXGW WenKai TC,cursive";
        break;
      case 7:
        logoText.style.fontFamily = "Margarine,sans-serif"; //
        break;
      case 8:
        logoText.style.fontFamily = "Quicksand,sans-serif";
        break;
      case 9:
        logoText.style.fontFamily = "Playfair Display,serif";
        break;
      case 10:
        logoText.style.fontFamily = "Baskervville SC,serif";
        break;
      case 11:
        logoText.style.fontFamily = "Ga Maamli,sans-serif";
        break;
      case 12:
        logoText.style.fontFamily = "Fustat,sans-serif";
        break;
      case 13:
        logoText.style.fontFamily = "Beiruti,sans-serif"; 
        break;
      case 14:
        logoText.style.fontFamily = "Neucha,cursive";
        break;
      case 15:
        logoText.style.fontFamily = "Nanum Pen Script,cursive";
        break;
      default:
        logoText.style.fontFamily = "Shadows Into Light,cursive";
        fontNum = 1;
        break
    }
  }
