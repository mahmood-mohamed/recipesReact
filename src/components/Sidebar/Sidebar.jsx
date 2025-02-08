import { useState } from "react";
import style from "./Sidebar.module.scss";
import imgSrc from "../../assets/logo-BfNap0Pe.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Open by default 🎉

  const onMenuOpenChange = (open) => {
    setIsOpen(open);
  };

  return (
    <div className="relative">
      {/* زر التوجّل (يظهر فقط في الشاشات الصغيرة) */}
      <button
        aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        className="pt-3 pl-3 bg-transparent text-2xl hover:font-semibold transition-all sm:hidden fixed top-4 left-4 z-50"
        onClick={() => onMenuOpenChange(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* القائمة الجانبية */}
      <nav
        className={`${style.nav} h-full transition-all duration-300 
          ${isOpen ? "w-64" : "w-0"} 
          sm:w-64 sm:flex sm:flex-col sm:py-5 fixed sm:relative top-0 left-0 z-40
          ${isOpen ? "block" : "hidden"}`} // إضافة هذا للسماح باستخدام display: block | none
      >
        <div className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <img src={imgSrc} className="w-full mt-4" alt="Logo food" />
          <ul className="mt-4 mx-3 space-y-2">
            <NavLink to={'/'}>
              <li className={style.active}>
                <i className="fa-solid fa-utensils"></i> Meal 
              </li>
            </NavLink>
            <NavLink to={'/'}>
              <li>
                <i className="fa-solid fa-utensils"></i> Ingredients
              </li>
            </NavLink>
            <NavLink to={'/'}>
              <li>
                <i className="fa-solid fa-utensils"></i> Area
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
