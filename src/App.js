import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Sample from "./pages/Sample";
import Design from "./pages/Design";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='sample/:id' element={<Sample />} />
      <Route path='design' element={<Design />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
