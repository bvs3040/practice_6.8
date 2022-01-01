const trafficLightEI1=document.querySelector('#trafficLight1');
const trafficLightEI2=document.querySelector('#trafficLight2');
const trafficLightEI3=document.querySelector('#trafficLight3');

function makeGreen1() {
    trafficLightEI1.style.background=('green');
    trafficLightEI2.style.background=('black');
    trafficLightEI3.style.background=('black');

    trafficLightEI1.addEventListener('click', makeGreen1);
    trafficLightEI2.addEventListener('click', makeGreen1);
    trafficLightEI3.addEventListener('click', makeGreen1);

    trafficLightEI1.removeEventListener('click', makeGreen1);
    trafficLightEI2.removeEventListener('click', makeGreen1);
    trafficLightEI3.removeEventListener('click', makeGreen1);

    trafficLightEI2.addEventListener('click', makeYellow2);
    trafficLightEI3.addEventListener('click', makeYellow2);
    trafficLightEI1.addEventListener('click', makeYellow2);
   }


function makeYellow2() {
    trafficLightEI2.style.background=('yellow');
    trafficLightEI1.style.background=('black');
    trafficLightEI3.style.background=('black');

    trafficLightEI2.addEventListener('click', makeYellow2);
    trafficLightEI3.addEventListener('click', makeYellow2);
    trafficLightEI1.addEventListener('click', makeYellow2);

    trafficLightEI2.removeEventListener('click', makeYellow2);
    trafficLightEI1.removeEventListener('click', makeYellow2);
    trafficLightEI3.removeEventListener('click', makeYellow2);

    trafficLightEI3.addEventListener('click', makeRed3);
    trafficLightEI2.addEventListener('click', makeRed3);
    trafficLightEI1.addEventListener('click', makeRed3);
  }


function makeRed3() {
    trafficLightEI3.style.background=('red');
    trafficLightEI1.style.background=('black');
    trafficLightEI2.style.background=('black');

    trafficLightEI3.addEventListener('click', makeRed3);
    trafficLightEI2.addEventListener('click', makeRed3);
    trafficLightEI1.addEventListener('click', makeRed3);

    trafficLightEI3.removeEventListener('click', makeRed3);
    trafficLightEI2.removeEventListener('click', makeRed3);
    trafficLightEI1.removeEventListener('click', makeRed3);
    
    trafficLightEI1.addEventListener('click', makeGreen1);
    trafficLightEI2.addEventListener('click', makeGreen1);
    trafficLightEI3.addEventListener('click', makeGreen1);
  }

trafficLightEI1.addEventListener('click', makeGreen1);
trafficLightEI2.addEventListener('click', makeGreen1);
trafficLightEI3.addEventListener('click', makeGreen1);


