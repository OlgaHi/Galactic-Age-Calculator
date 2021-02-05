export default class Planet {
  constructor(planetName, earthUserAge) {
    this.planetName = planetName;
    this.earthUserAge = earthUserAge;
    this.planetEarthYears = 0;
    this.userPlanetAge = 0;
  }
  
  calculatePlanetEarthYears() {
    const mercuryYears = .24;
    const venusYears = .62;
    if (this.planetName === "Mercury") {
      return Math.round((365 * mercuryYears));
    } else if (this.planetName === "Venus") {
      return Math.round((365 * venusYears));
    } else if (this.planetName === "Mars") {
      
    } else {
      return false;
    }
  }
}
