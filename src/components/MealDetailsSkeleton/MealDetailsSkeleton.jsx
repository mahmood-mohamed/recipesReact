export default function MealDetailsSkeleton({ingredientExists = true}) {
  return (
    <div className="max-w-6xl mx-auto animate-pulse space-y-6">
      {/* Hero section */}
      {!ingredientExists && (
        <div className="h-8 w-1/3 mx-auto bg-gray-300 rounded my-5" />
      )}

      {/* Ingredients section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-300 dark:bg-gray-700 h-80 rounded-xl" />
        <div className="space-y-4">
          <div className="h-6 bg-gray-300 rounded w-2/4" />
        
          <div class="flex gap-2">
            <div className="h-6 bg-gray-300 rounded-xl w-20" />
            <div className="h-6 bg-gray-300 rounded-xl w-24" />
          </div>
        
          <div className="h-6 bg-gray-300 rounded-md w-36" />
        
          <div className="h-3 bg-gray-300 rounded w-[94%]" />
          <div className="h-3 bg-gray-300 rounded w-[92%]" />
          <div className="h-3 bg-gray-300 rounded w-[96%]" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          {ingredientExists ? (
            <div className="h-9 mt-5 rounded-lg w-48 bg-gray-300"/>
          ) : (
            <div className="flex flex-wrap gap-x-5 gap-y-3 pt-4 mt-5">
              <div className="h-9 rounded-lg w-36 bg-gray-300"/>
              <div className="h-9 rounded-lg w-40 bg-gray-300"/>
            </div>
          )}
        </div>
      </div>

      {ingredientExists ? (
        <div>
          <div className="h-6 bg-gray-300 w-44 my-4 rounded" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) =>
              <div key={i} className="h-12 bg-gray-300 rounded w-12/4" />
            )}
          </div>
        </div>
      ) : (
        <div className="h-12 mt-5 rounded-lg w-52 bg-gray-300 mx-auto"/>
      )}

    </div>
  );
}
