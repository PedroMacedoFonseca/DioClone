import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Feed } from "./Pages/Feed";
import { Register } from "./Pages/Cadastro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
