import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Sub1 from "./pages/Sub1";
import Sub2 from "./pages/Sub2";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='Sub1' element={<Sub1 />} />
      <Route path='Sub2' element={<Sub2 />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
