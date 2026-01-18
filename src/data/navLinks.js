import {
  Home,
  Shuffle,
  Utensils,
  ShoppingBasket,
  MapPinned,
} from "lucide-react";

export const navLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "Random Meal", path: "/random", icon: Shuffle },
    { label: "Categories", path: "/categories", icon: Utensils },
    { label: "Ingredients", path: "/ingredients", icon: ShoppingBasket },
    { label: "Areas", path: "/areas", icon: MapPinned },
];

export const logoBrand = 'Food Explorer';
