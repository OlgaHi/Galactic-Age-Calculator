//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './js/planet.js';

let venus = new Planet("Venus", 82, "sometimes");
venus.calculatePlanetEarthYears();
venus.calculateUserPlanetAge();

venus.determineUserLifeExpectancy();
venus.calculateUserPlanetLifeExpectancy();
venus.calculateLeftOrSurp();
let response = venus.determineLeftOrSurpass();
console.log(response);
console.log(venus.userPlanetAge);
console.log(venus.userLifeExpectancy);
console.log(venus.userPlanetLifeExpectancy);
console.log(venus.leftOrSurpassed);

