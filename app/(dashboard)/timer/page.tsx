import TimerFooter from "./timer-footer";
import TimerModule from "./timer-module";

export default function Home() {
  return (
    <>
      <TimerModule />
      <div className="flex flex-col justify-end">
        <TimerFooter />
      </div>
    </>
  );
}
