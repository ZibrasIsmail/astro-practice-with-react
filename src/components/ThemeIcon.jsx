import React, { useEffect, useState } from "react";

const ThemeIcon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    setIsMounted(true);
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (isMounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isMounted, theme]);

  return isMounted ? (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "☀️"}</button>
  ) : null;
};

export default ThemeIcon;
