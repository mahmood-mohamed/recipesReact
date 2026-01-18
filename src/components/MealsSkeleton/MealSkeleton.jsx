export default function MealsSkeleton({ count = 15 }) {
  return (
    <div className="        
      grid grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5
      gap-4 lg:gap-5"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"
        >
          <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
          <div className="p-3 lg:p-4 space-y-2">
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
