export function formatarData(dateString) {
  const date = new Date(dateString);
  const dateNow = new Date();

  const seconds = Math.floor((dateNow - date) / 1000);
  const minutes = Math.floor((dateNow - date) / (1000 * 60));
  const hours = Math.floor((dateNow - date) / (1000 * 60 * 60));

  if (seconds > 0 && seconds <= 60) {
    return seconds + "s";
  }

  if (minutes > 0 && minutes <= 90) {
    return minutes + "min";
  }

  if (hours > 0) {
    return hours + "h";
  }
}
