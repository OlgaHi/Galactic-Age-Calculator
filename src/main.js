//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './js/planet.js';

let mars = new Planet("Mars", 36, "regulary");
//mercury.calculatePlanetEarthYears();
mars.calculateUserPlanetAge();

mars.determineUserLifeExpectancy();
mars.calculateUserPlanetLifeExpectancy();
mars.calculateLeftOrSurp();
let response = mars.determineLeftOrSurpass();
console.log(response);
console.log(mars.userPlanetAge);
console.log(mars.userLifeExpectancy);
console.log(mars.userPlanetLifeExpectancy);
console.log(mars.leftOrSurpassed);



