import React, { useState, useEffect } from "react";

function DarkMode() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (
    <button
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      {mode === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default DarkMode;
