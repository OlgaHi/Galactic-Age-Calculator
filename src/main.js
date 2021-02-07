//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './js/planet.js';

let mercury = new Planet("Mercury", 36, "never");
mercury.calculatePlanetEarthYears();
mercury.calculateUserPlanetAge();

mercury.determineUserLifeExpectancy();
mercury.calculateUserPlanetLifeExpectancy();
mercury.calculateLeftOrSurp();
let response = mercury.determineLeftOrSurpass();
console.log(response);
console.log(mercury.userPlanetAge);
console.log(mercury.userLifeExpectancy);
console.log(mercury.userPlanetLifeExpectancy);
console.log(mercury.leftOrSurpassed);

