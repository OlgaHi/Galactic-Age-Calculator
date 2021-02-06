import Planet from '../src/js/planet.js';

describe('Planet', () => {

  let mercury;
  let venus;
  let mars;
  let jupiter;
  
  beforeEach(() => {
    mercury = new Planet("Mercury", 36);
    venus = new Planet("Venus", 36);
    mars = new Planet("Mars", 36);
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
    mercury.calculateuserPlanetAge();
    expect(mercury.userPlanetAge).toEqual(149);
  });





  
});