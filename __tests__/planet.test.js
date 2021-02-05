import Planet from '../src/js/planet.js';

describe('Planet', () => {

  let mercury;
  let jupiter;
  let venus;
  let mars;
  let saturn;

  beforeEach(() => {
    mercury = new Planet("Mercury", 36);
    jupiter = new Planet("Jupiter", 36);
    venus = new Planet("Venus", 36);
    mars = new Planet("Mars", 36);
    saturn = new Planet("Saturn", 36);
  });

  test('should correctly create a Planet object with specified properties', () => {
    expect(mercury.planetName).toEqual("Mercury");
    expect(mercury.earthUserAge).toEqual(36);
  });

  test('should correctly calculate earth years for mercury object', () => {
    expect(mercury.calculatePlanetEarthYears()).toEqual(88);
    expect(saturn.calculatePlanetEarthYears()).toEqual(false);
  });

  test('should correctly calculate earth years for venus object', () => {
    expect(venus.calculatePlanetEarthYears()).toEqual(226);
    expect(saturn.calculatePlanetEarthYears()).toEqual(false);
  });

  test('should correctly calculate earth years for mars object', () => {
    expect(mars.calculatePlanetEarthYears()).toEqual(686);
    expect(saturn.calculatePlanetEarthYears()).toEqual(false);
  });

  test('should correctly calculate earth years for jupiter object', () => {
    expect(jupiter.calculatePlanetEarthYears()).toEqual(4329);
    expect(saturn.calculatePlanetEarthYears()).toEqual(false);
  });

  test('should update property planetEarthYears for mercury object', () => {
    mercury.calculatePlanetEarthYears();
    expect(mercury.planetEarthYears).toEqual(88);
  });


  
});