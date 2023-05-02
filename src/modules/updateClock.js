const isZero = (number) => number === 0;

const updateClock = (timeArray, timeInterval) => {
  if (isZero(timeArray[2]) && isZero(timeArray[1]) && isZero(timeArray[0])) return clearInterval(timeInterval);
  timeArray.filter(e => e !== 0).length === 0 ? clearInterval(timeInterval) : null; 

  if (isZero(timeArray[2])) {
    timeArray[2] = 59;
    isZero(timeArray[1]) ? (timeArray[1]=59, timeArray[0]--) : timeArray[1]--;
  } else {
    timeArray[2]--;
  }
};

export default updateClock;