//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './js/planet.js';

let venus = new Planet("Mercury", 36);
venus.calculatePlanetEarthYears();
venus.calculateuserPlanetAge()
console.log(venus.userPlanetAge)