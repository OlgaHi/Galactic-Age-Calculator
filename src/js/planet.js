export default class Planet {
  constructor(planetName, earthUserAge) {
    this.planetName = planetName;
    this.earthUserAge = earthUserAge;
    this.planetEarthYears = 0;
    this.userPlanetAge = 0;
  }
  
  calculatePlanetEarthYears() {
    const mercuryYears = .24;
    
    if (this.planetName === "Mercury") {
      return Math.round((365 * mercuryYears));
    } else {
      return false;
    }
  }
}
