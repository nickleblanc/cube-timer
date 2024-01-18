export default function getTimeString(time: number) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor(time % 1000);
    const timeFormat = `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    return timeFormat;
}