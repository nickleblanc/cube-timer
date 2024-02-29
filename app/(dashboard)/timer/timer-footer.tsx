import Stats from "@/components/stats";
import { QuickStats } from "./quick-stats";
import { TimerScramble } from "./timer-scramble";
import { getSolvesByUser } from "@/data/solve";
import { auth } from "@/auth";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function TimerFooter() {
  const session = await auth();
  const userId = session?.user?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["solves", userId],
    queryFn: () => getSolvesByUser(userId),
  });

  return (
    <div className="flex space-x-2 p-2">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Stats />
        <QuickStats />
        <TimerScramble />
      </HydrationBoundary>
    </div>
  );
}
