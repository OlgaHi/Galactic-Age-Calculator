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

  test('should calculate and update property for mercury object', () => {
    mercury.calculateUserPlanetLifeExpectancy();
    expect(mercury.userPlanetLifeExpectancy).toEqual(332);
  });







  
});