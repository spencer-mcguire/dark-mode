import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export default useDarkMode = key => {
  const [dark, setDark] = useLocalStorage(key);

  useEffect(() => {
    body = document.querySelector("body");

    if (useLocalStorage === true) {
      body.classList.add("dark-mode");
    }

    if (localStorage === false) {
      body.classList.remove("dark-mode");
    }
  }, [key]);

  return [dark, setDark];
};
