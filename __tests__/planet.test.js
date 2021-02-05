import Planet from '../src/js/planet.js';

describe('Planet', () => {

  let mercury;
  let jupiter;

  beforeEach(() => {
    mercury = new Planet("Mercury", 36);
    jupiter = new Planet("Jupiter", 36);
  });

  test('should correctly create a Planet object with specified properties', () => {
    expect(mercury.planetName).toEqual("Mercury");
    expect(mercury.earthUserAge).toEqual(36);
  });

  test('should correctly calculate earth years for mercury object', () => {
    expect(mercury.calculatePlanetEarthYears()).toEqual(88);
    expect(jupiter.calculatePlanetEarthYears()).toEqual(false);
  });




  
});