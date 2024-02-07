import Navbar from "@/components/navbar";
import { ThemeSelector } from "@/app/settings/theme-selector";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="m-10 flex justify-center">
        <Card className="m-1 h-[500px] w-[500px] text-lg">
          <CardHeader>
            <CardTitle className="text-center">Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <ThemeSelector />
          </CardContent>
        </Card>
      </div>
    </>
  );
}