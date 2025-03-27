function sumTimeInSeconds(times) {
  let totalMinutes = 0;
  let totalSeconds = 0;

  times.forEach(time => {
    const [minutes, seconds] = time.split(':').map(Number); 
    totalMinutes += minutes;
    totalSeconds += seconds;
  });

  totalSeconds += totalMinutes*60;

  return `${totalSeconds}`;
}

module.exports = { sumTimeInSeconds };