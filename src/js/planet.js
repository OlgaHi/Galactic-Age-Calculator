export default class Planet {
  constructor(planetName, earthUserAge, activityLevel) {
    this.planetName = planetName;
    this.earthUserAge = earthUserAge;
    this.userPlanetAge = 0;
    this.activityLevel = activityLevel;
    this.userLifeExpectancy = 0;
    this.leftOrSurpassed = 0;
  }
  
  calculatePlanetEarthYears() {
    const mercuryYears = .24;
    const venusYears = .62;
    const marsYears = 1.88;
    const jupiterYears = 11.86;
    
    if (this.planetName === "Mercury") {
      return Math.round((365 * mercuryYears));
    } else if (this.planetName === "Venus") {
      return Math.round((365 * venusYears));
    } else if (this.planetName === "Mars") {
      return Math.round((365 * marsYears));
    } else {
      return Math.round((365 * jupiterYears));
    }
  }

  calculateUserPlanetAge() {
    this.userPlanetAge = Math.round((365 * this.earthUserAge)/this.calculatePlanetEarthYears());
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
    this.userPlanetLifeExpectancy = Math.round((365 * this.userLifeExpectancy)/this.calculatePlanetEarthYears());
  }
  
  calculateLeftOrSurp() {
    this.leftOrSurpassed = this.userPlanetLifeExpectancy - this.userPlanetAge;
  }

  determineLeftOrSurpass() {
    if (!/[-]/.test(this.leftOrSurpassed)) {
      return (`Your age in ${this.planetName} is ${this.userPlanetAge} years. The average life expectancy in ${this.planetName} is ${this.userPlanetLifeExpectancy} years. It looks like you still have at least ${this.leftOrSurpassed} years left to live! Hooray!`);
    } else {
      return (`Your age in ${this.planetName} is ${this.userPlanetAge} years. You are already surpassed the average life expectancy in ${this.planetName}, which is ${this.userPlanetLifeExpectancy} years, for about up to ${this.leftOrSurpassed * (-1)} years. Congrats!`) ;
    }
  }
}