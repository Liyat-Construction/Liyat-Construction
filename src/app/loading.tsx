export default function RootLoading() {
  return (
    <div className="dark:bg-surface-page flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="text-center">
        {/* Pulsing logo placeholder */}
        <div className="bg-brand-accent/20 mx-auto mb-6 h-10 w-10 animate-pulse rounded-full" />
        <div className="mx-auto h-6 w-48 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        <div className="mx-auto mt-3 h-4 w-32 animate-pulse rounded-md bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  );
}
