//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './js/planet.js';

let jupiter = new Planet("Jupiter", 36);
jupiter.calculatePlanetEarthYears();
jupiter.calculateUserPlanetAge();

jupiter.determineUserLifeExpectancy();
jupiter.calculateUserPlanetLifeExpectancy();
jupiter.calculateLeftOrSurp();
let response = jupiter.determineLeftOrSurpass();
console.log(response);
console.log(jupiter.userPlanetAge);
console.log(jupiter.userLifeExpectancy);
console.log(jupiter.userPlanetLifeExpectancy);
console.log(jupiter.leftOrSurpassed);

