import setZero from '../helpers/setZero';

const isZero = (number) => number === 0;

const setClock = (selector, timeArray) => {
  if (timeArray.filter(e => e !== 0).length === 0) return; 

  selector.innerHTML = timeArray.map(e => setZero(e)).join(':');
  
  if (isZero(timeArray[2])) {
    timeArray[2] = 59;
    isZero(timeArray[1]) ? (timeArray[1]=59, timeArray[0]--) : timeArray[1]--;
  } else {
    timeArray[2]--;
  }

};

export default setClock;
