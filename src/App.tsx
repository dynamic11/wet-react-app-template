import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
