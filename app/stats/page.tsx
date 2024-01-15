import { fetchSolveData } from "@/app/lib/data";
import NavBar from "@/app/components/navbar";
import getTimeString from "../lib/timer-util";

export default async function Stats() {

    const stats = await fetchSolveData();

    let total = 0;
    let timestring = '';

    for (const solve of stats) {
        total += solve.time;
        timestring = getTimeString(total);
    }

    let num = stats.length;

    return (
        <>
        <NavBar />
        <div className="flex flex-col items-center p-2">
            <div className="w-48 h-24 bg-slate-600 rounded-lg">
                <div className="p-4 flex flex-col">
                    <div>
                        <p>Time Spent</p>
                    </div>
                    <span>{timestring}</span>
                </div>
            </div>
            <div className="w-48 h-24 bg-slate-600 rounded-lg">
                <div className="p-4 flex flex-col">
                    <div>
                        <p>Total Solves</p>
                    </div>
                    <span>{num}</span>
                </div>
            </div>
        </div>
        </>
    )
}