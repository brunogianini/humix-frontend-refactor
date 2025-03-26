import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function StreakCalendar() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 md:col-span-2 mt-5 ">
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Listening Calendar</CardTitle>
            <CardDescription className="text-zinc-400">Your album rating and listening activity</CardDescription>
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <div className="ml-2 flex items-center gap-1">
              <div className="h-3 w-3 rounded-sm bg-yellow-700/40"></div>
              <span>Ratings</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-50 gap-2">
        {[...Array(361)].map((_, index) => (
          <div key={index} className="h-5 w-5 rounded-sm bg-zinc-800 flex items-center justify-center">
            <span className="text-xs text-white"></span>
          </div>
        ))}
        </div>

      </CardContent>
    </Card>
  );
}
