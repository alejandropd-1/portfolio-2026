"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DarkToggle({ initialTheme }) {
  // Inicializamos el estado en base a la prop renderizada por el servidor (o "light" por defecto si se requiere en el SSR).
  const [theme, setTheme] = useState(initialTheme || "light");
  const router = useRouter();

  // Opcional: asegurarnos que después de montar empatamos con lo que diga el HTML
  useEffect(() => {
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    if (htmlTheme && htmlTheme !== theme) {
      setTheme(htmlTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    // 1. Cambio instantáneo en dom
    document.documentElement.setAttribute("data-theme", nextTheme);

    // 2. Persistencia en la cookie por un año (31536000 segundos)
    document.cookie = `color-theme=${nextTheme}; path=/; max-age=31536000`;

    // 3. Forzar a Next a que recargue el layout de fondo para tomar la nueva cookie en navegaciones SSR futuras
    router.refresh();
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title="Cambiar Tema"
      className="theme-toggle"
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </button>
  );
}
