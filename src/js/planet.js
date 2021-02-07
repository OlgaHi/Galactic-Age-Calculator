export default class Planet {
  constructor(planetName, earthUserAge, activityLevel) {
    this.planetName = planetName;
    this.earthUserAge = earthUserAge;
    this.planetEarthYears = 0;
    this.userPlanetAge = 0;
    this.activityLevel = activityLevel;
    this.userLifeExpectancy = 0;
    this.leftOrSurpassed = 0
  }
  
  calculatePlanetEarthYears() {
    const mercuryYears = .24;
    const venusYears = .62;
    const marsYears = 1.88;
    const jupiterYears = 11.86;
    
    if (this.planetName === "Mercury") {
      this.planetEarthYears = Math.round((365 * mercuryYears));
    } else if (this.planetName === "Venus") {
      this.planetEarthYears = Math.round((365 * venusYears));
    } else if (this.planetName === "Mars") {
      this.planetEarthYears = Math.round((365 * marsYears));
    } else {
      this.planetEarthYears = Math.round((365 * jupiterYears));
    }
  }

  calculateUserPlanetAge() {
    this.userPlanetAge = Math.round((365 * this.earthUserAge)/this.planetEarthYears);
  }

  determineUserLifeExpectancy() {
    if (this.activityLevel === "never") {
      this.userLifeExpectancy = 79;
    } else if (this.activityLevel === "sometimes") {
      this.userLifeExpectancy = 80;
    } else {
      this.userLifeExpectancy = 82;
    }
  }

  calculateUserPlanetLifeExpectancy() {
    this.userPlanetLifeExpectancy = Math.round((365 * this.userLifeExpectancy)/this.planetEarthYears);
  }
  
  calculateLeftOrSurp() {
    
  }
  
  
}