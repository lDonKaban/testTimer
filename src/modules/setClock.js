import updateClock from './updateClock';
import setZero from '../helpers/setZero';

const setClock = (selector, deadLine) => {
  const timeArray = deadLine.split(':').map(e => +e);
  const timeInterval = setInterval(() => updateClock(timeArray, timeInterval), 1000);

  timeArray.map(e => setZero(e));
  selector.innerHTML = timeArray.join(':');
};

export default setClock;
