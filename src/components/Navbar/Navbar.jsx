import { Search, Moon, Sun, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { logoBrand } from "../../data/navLinks";

export default function Navbar({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?s=${query}`);
    setQuery("");
  }

  return (
    <header
      className="
        sticky top-0 z-40
        bg-white/90 dark:bg-gray-900/90
        backdrop-blur
        border-b border-gray-200 dark:border-gray-700
      "
      aria-label="Main navigation"
    >
      <div className="container px-4 h-16 flex items-center justify-between gap-4">

        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg
                     hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Brand */}
        <Link
          to="/"
          className="font-bold text-lg lg:text-xl
                     text-gray-900 dark:text-white"
          aria-label="Food Explorer Home"
        >
          <span className="brand-font">{logoBrand}</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="
            hidden sm:flex items-center
            bg-gray-100 dark:bg-gray-800
            rounded-lg px-3 py-1.5
            w-full max-w-md
          "
          role="search"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search meals..."
            className="
              bg-transparent outline-none
              px-2 text-sm w-full
              text-gray-900 dark:text-white
            "
            aria-label="Search meals input field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="
              p-2 rounded-lg
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition
            "
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
