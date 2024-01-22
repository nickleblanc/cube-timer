import { fetchSolveData } from "@/app/lib/data";
import NavBar from "@/app/components/navbar";
import getTimeString from "@/app/lib/timer-util";
import { Card, CardContent, CardDescription, CardHeader, CardTitle }  from "@/app/components/ui/card";

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
        {/* <NavBar /> */}
        <div className="flex flex-row justify-center">
            <Card className="w-[250px] m-2">
                <CardHeader>
                    <CardTitle>Time Spent Solving</CardTitle>
                </CardHeader>
                <CardContent className="text-green-500 text-xl font-bold">
                    <p>{timestring}</p>
                </CardContent>
            </Card>
            <Card className="w-[250px] m-2">
                <CardHeader>
                    <CardTitle>Total Number of Solves</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-500 text-xl font-bold">
                    <p>{num}</p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}