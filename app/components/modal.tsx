export default function Modal(show: boolean) {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
        <div className="w-72 h-72 bg-slate-400 rounded-md p-2">Hello Modal</div>
        </div>
    )
}