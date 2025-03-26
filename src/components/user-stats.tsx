export default function UserStats() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">1</p>
        <p className="text-xs text-zinc-400">Albums Rated</p>
      </div>
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">2</p>
        <p className="text-xs text-zinc-400">Reviews</p>
      </div>
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">3</p>
        <p className="text-xs text-zinc-400">Followers</p>
      </div>
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">4</p>
        <p className="text-xs text-zinc-400">Following</p>
      </div>
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">5</p>
        <p className="text-xs text-zinc-400">Current Streak</p>
      </div>
      <div className="rounded-lg bg-zinc-900 p-3 text-center">
        <p className="text-2xl font-bold text-white">6</p>
        <p className="text-xs text-zinc-400">Longest Streak</p>
      </div>
    </div>
  );
}
