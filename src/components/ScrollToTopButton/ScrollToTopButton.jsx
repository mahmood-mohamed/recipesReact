import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Scroll to top"
            title="Scroll to top"
            className={`
                hidden sm:flex
                fixed bottom-6 right-6 z-50
                bg-orange-500 hover:bg-orange-600
                dark:bg-orange-600 dark:hover:bg-orange-700
                text-white p-2.5 md:p-3 rounded-full
                shadow-lg
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-orange-400
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
            `}
        >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>

    );
};
