function setZero (elem) {
  if (elem >= 0 && elem < 10) {
    return '0' + elem;
  }
  return elem;
}

export default setZero;