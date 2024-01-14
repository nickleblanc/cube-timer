
export default function getTimeString(timeraw: number) {
    let time = timeraw;
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor(time % 1000);
    let timeFormat = `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    return timeFormat;
}