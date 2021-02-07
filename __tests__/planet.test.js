import Planet from '../src/js/planet.js';

describe('Planet', () => {
  let mercury;
  let venus;
  let mars;
  let jupiter;
  
  beforeEach(() => {
    mercury = new Planet("Mercury", 36, "never");
    venus = new Planet("Venus", 36, "sometimes");
    mars = new Planet("Mars", 36, "regulary");
    jupiter = new Planet("Jupiter", 36);
  });

  test('should correctly create a Planet object with specified properties', () => {
    expect(mercury.planetName).toEqual("Mercury");
    expect(mercury.earthUserAge).toEqual(36);
  });

  test('should calculate and update property planetEarthYears for mercury object', () => {
    mercury.calculatePlanetEarthYears();
    expect(mercury.planetEarthYears).toEqual(88);
  });

  test('should calculate and update property planetEarthYears for venus object', () => {
    venus.calculatePlanetEarthYears();
    expect(venus.planetEarthYears).toEqual(226);
  });

  test('should calculate and update property planetEarthYears for mars object', () => {
    mars.calculatePlanetEarthYears();
    expect(mars.planetEarthYears).toEqual(686);
  });

  test('should calculate and update property planetEarthYears for jupiter object', () => {
    jupiter.calculatePlanetEarthYears();
    expect(jupiter.planetEarthYears).toEqual(4329);
  });

  test('should calculate and update property userPlanetAge for mercury object', () => {
    mercury.calculatePlanetEarthYears();
    mercury.calculateUserPlanetAge();
    expect(mercury.userPlanetAge).toEqual(149);
  });

  test('should calculate and update property userPlanetAge for venus object', () => {
    venus.calculatePlanetEarthYears();
    venus.calculateUserPlanetAge();
    expect(venus.userPlanetAge).toEqual(58);
  });

  test('should calculate and update property userPlanetAge for mars object', () => {
    mars.calculatePlanetEarthYears();
    mars.calculateUserPlanetAge();
    expect(mars.userPlanetAge).toEqual(19);
  });

  test('should calculate and update property userPlanetAge for jupiter object', () => {
    jupiter.calculatePlanetEarthYears();
    jupiter.calculateUserPlanetAge();
    expect(jupiter.userPlanetAge).toEqual(3);
  });

  test('should determine and update property userLifeExpectancy for mercury object', () => {
    mercury.determineUserLifeExpectancy();
    expect(mercury.userLifeExpectancy).toEqual(79);
  });

  test('should determine and update property userLifeExpectancy for venus object', () => {
    venus.determineUserLifeExpectancy();
    expect(venus.userLifeExpectancy).toEqual(80);
  });

  test('should determine and update property userLifeExpectancy for mars object', () => {
    mars.determineUserLifeExpectancy();
    expect(mars.userLifeExpectancy).toEqual(82);
  });

  test('should determine and update property userLifeExpectancy for jupiter object', () => {
    jupiter.determineUserLifeExpectancy();
    expect(jupiter.userLifeExpectancy).toEqual(82);
  });

  test('should calculate and update property userPlanetLifeExpectancy for mercury object', () => {
    mercury.calculatePlanetEarthYears();
    mercury.determineUserLifeExpectancy();
    mercury.calculateUserPlanetLifeExpectancy();
    expect(mercury.userPlanetLifeExpectancy).toEqual(328);
  });

  test('should calculate and update property userPlanetLifeExpectancy for venus object', () => {
    venus.calculatePlanetEarthYears();
    venus.determineUserLifeExpectancy();
    venus.calculateUserPlanetLifeExpectancy();
    expect(venus.userPlanetLifeExpectancy).toEqual(129);
  });

  test('should calculate and update property userPlanetLifeExpectancy for jupiter object', () => {
    jupiter.calculatePlanetEarthYears();
    jupiter.determineUserLifeExpectancy();
    jupiter.calculateUserPlanetLifeExpectancy();
    expect(jupiter.userPlanetLifeExpectancy).toEqual(7);
  });

  test('should calculate and update property userPlanetLifeExpectancy for mars object', () => {
    mars.calculatePlanetEarthYears();
    mars.determineUserLifeExpectancy();
    mars.calculateUserPlanetLifeExpectancy();
    expect(mars.userPlanetLifeExpectancy).toEqual(44);
  });

  test('should determine and update property leftOrSurpassed for mercury object', () => {
    mercury.calculatePlanetEarthYears();
    mercury.calculateUserPlanetAge();
    mercury.determineUserLifeExpectancy();
    mercury.calculateUserPlanetLifeExpectancy();
    mercury.calculateLeftOrSurp();
    expect(mercury.leftOrSurpassed).toEqual(179);
  });

  test('should determine and update property leftOrSurpassed for venus object', () => {
    venus.calculatePlanetEarthYears();
    venus.calculateUserPlanetAge();
    venus.determineUserLifeExpectancy();
    venus.calculateUserPlanetLifeExpectancy();
    venus.calculateLeftOrSurp();
    expect(venus.leftOrSurpassed).toEqual(71);
  });

  test('should determine and update property leftOrSurpassed for mars object', () => {
    mars.calculatePlanetEarthYears();
    mars.calculateUserPlanetAge();
    mars.determineUserLifeExpectancy();
    mars.calculateUserPlanetLifeExpectancy();
    mars.calculateLeftOrSurp();
    expect(mars.leftOrSurpassed).toEqual(25);
  });

  test('should determine and update property leftOrSurpassed for jupiter object', () => {
    jupiter.calculatePlanetEarthYears();
    jupiter.calculateUserPlanetAge();
    jupiter.determineUserLifeExpectancy();
    jupiter.calculateUserPlanetLifeExpectancy();
    jupiter.calculateLeftOrSurp();
    expect(jupiter.leftOrSurpassed).toEqual(4);
  });









  
});