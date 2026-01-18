import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { logoBrand, navLinks } from "../../data/navLinks";
import logoImg from "/assets/logo.png";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-64 flex flex-col
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:sticky top-0 lg:h-screen

        `}
        aria-label="Primary Navigation"
      >
        {/* Header */}
        <div className="h-16 lg:h-[97px] flex items-center justify-between px-4 border-b dark:border-gray-800">
          <img
            src={logoImg}
            alt={`${logoBrand} preview`}
            className="w-[70px] lg:w-[100px]"
          />

          {/* Close (Mobile only) */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navLinks.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
                `
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 text-xs text-center text-gray-400">
          © 2026 Mahmoud Mohamed
        </div>
      </aside>
    </>
  );
}
