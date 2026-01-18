
export default function AreasSkeleton() {
  return (
    <div className="max-w-6xl mx-auto animate-pulse space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 15 }).map((_, i) =>
                <div key={i} className="h-14 bg-gray-300 rounded" />
            )}
            
        </div>
    </div>
  )
}
