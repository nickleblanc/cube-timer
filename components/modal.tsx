export default function Modal(show: boolean) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="h-72 w-72 rounded-md bg-slate-400 p-2">Hello Modal</div>
    </div>
  );
}
