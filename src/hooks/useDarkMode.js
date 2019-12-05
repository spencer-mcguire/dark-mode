import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
const useDarkMode = key => {
  const [dark, setDark] = useLocalStorage(key);

  useEffect(() => {
    console.log(dark);
    const body = document.querySelector("body");
    dark ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
