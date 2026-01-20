import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/Main";
import Sample from "./pages/Sample";
import Design from "./pages/Design";

function App() {

  const setScreenSize = () => {
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sample/:id" element={<Sample />} />
        <Route path="/design/:id" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
