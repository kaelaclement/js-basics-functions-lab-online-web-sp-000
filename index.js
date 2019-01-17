function distanceFromHqInBlocks(location) {
  let blocks = Math.abs(location - 42);
  return blocks;
};

function distanceFromHqInFeet(location) {
  let feet = distanceFromHqInBlocks(location) * 264;
  return feet;
};

function distanceTravelledInFeet(location1, location2) {
  let blocks = Math.abs(location1 - location2);
  let feet = blocks * 264;
  return feet;
};

function calculatesFarePrice(start, destination) {
  let feetTravelled = distanceTravelledInFeet(start, destination);
  let feetCharged = feetTravelled - 400;
  let price;
  if (feetTravelled <= 400) {
    price = 0;
  } else if (feetTravelled > 400 && feetTravelled < 2000) {
    price = feetCharged * 0.02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    price = 25;
  } else if (feetTravelled > 2500) {
    return 'cannot travel that far';
  }
  return price;
};