// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42;
  if (pickupLocation > hq) {
    return pickupLocation - hq;
  } else {
    return hq - pickupLocation;
  }
}
function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(startBlock - endBlock);
  return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
