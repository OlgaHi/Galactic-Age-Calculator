import Planet from '../src/js/planet.js';

describe('Planet', () => {

  let planet;

  beforeEach(() => {
    planet = new Planet("Mercury", 36);
  });

  test('should correctly create a Planet object with specified properties', () => {
    expect(planet.planetName).toEqual("Mercury");
    expect(planet.earthUserAge).toEqual(36);
  });
  
});