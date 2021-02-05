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
    const marsYears = 1.88;
    
    if (this.planetName === "Mercury") {
      this.planetEarthYears = Math.round((365 * mercuryYears));
    } else if (this.planetName === "Venus") {
      this.planetEarthYears = Math.round((365 * venusYears));
    } else if (this.planetName === "Mars") {
      this.planetEarthYears = Math.round((365 * marsYears));
    } 
  }
}