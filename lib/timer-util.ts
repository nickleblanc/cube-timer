export default function getTimeString(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor(time % 1000);
  if (minutes === 0) {
    const timeFormat = `${seconds}.${milliseconds.toString().padStart(2, "0").slice(0, 2)}`;
    return timeFormat;
  } else {
    const timeFormat = `${minutes}:${seconds
      .toString()
      .padStart(
        2,
        "0",
      )}.${milliseconds.toString().padStart(2, "0").slice(0, 2)}`;
    return timeFormat;
  }
}
