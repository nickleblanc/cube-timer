import { fetchSolveData } from "@/app/lib/data";
import NavBar from "@/app/components/navbar";

export default async function Stats() {

    const stats = await fetchSolveData();

    let total = 0;

    for (const solve of stats) {
        total += solve.time;
    }

    let num = stats.length;

    return (
        <div>
            <NavBar />
            <div className="p-2">
            <div className="w-48 h-24 bg-slate-600 rounded-lg">
                <div className="p-4 flex flex-col">
                    <div>
                        <p>Time Spent</p>
                    </div>
                    <span>{total}</span>
                </div>
            </div>
            <>{num}</>
            </div>
        </div>
    )
}