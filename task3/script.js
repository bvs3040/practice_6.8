const trafficLightEI=document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEI.style.background=('green');
    trafficLightEI.removeEventListener('click', makeGreen);
    trafficLightEI.addEventListener('click', makeYellow);
}
trafficLightEI.addEventListener('click', makeYellow);

function makeYellow() {
    trafficLightEI.style.background=('yellow');
    trafficLightEI.removeEventListener('click', makeYellow);
    trafficLightEI.addEventListener('click', makeRed);
}
trafficLightEI.addEventListener('click', makeRed);

function makeRed() {
    trafficLightEI.style.background=('red');
    trafficLightEI.removeEventListener('click', makeRed);
    trafficLightEI.addEventListener('click', makeGreen);
}
trafficLightEI.addEventListener('click', makeGreen);


