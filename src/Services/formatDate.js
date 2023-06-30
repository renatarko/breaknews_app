export function formatData(dateString) {
  const date = new Date(dateString);
  const dateNow = new Date();

  const seconds = Math.floor((dateNow - date) / 1000);
  const minutes = Math.floor((dateNow - date) / (1000 * 60));
  const hours = Math.floor((dateNow - date) / (1000 * 60 * 60));
  const days = Math.floor((dateNow - date) / (1000 * 60 * 60 * 24));

  if (seconds > 0 && seconds <= 59) {
    return seconds + "s";
  }

  if (minutes > 0 && minutes <= 90) {
    return minutes + "min";
  }

  if (hours > 0 && hours <= 24) {
    return hours + "h";
  }

  if (days === 1) {
    return `${days} dia`;
  } else if (days > 1) {
    return `${days} dias`;
  }
}
