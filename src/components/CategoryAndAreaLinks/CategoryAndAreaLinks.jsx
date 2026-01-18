import { MapPinned, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryAndAreaLinks({strCategory, strArea}) {
  return (
        <div className="flex flex-wrap gap-3 text-sm font-medium">
            <Link
                to={`/categories/${strCategory}`}
                className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                aria-label={`Explore meals in category ${strCategory}`}
            >
                <Utensils className="w-4 h-4" /> {strCategory}
            </Link>

            <Link
                to={`/areas/${strArea}`}
                className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                aria-label={`Explore meals from area ${strArea}`}
            >
                <MapPinned className="w-4 h-4" /> {strArea}
            </Link>
        </div>  
    )
}

