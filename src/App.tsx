
import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark") ;
  }

  return (
    <>
    
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home/>
      <About/>

     


    </>
  )
}

export default App
