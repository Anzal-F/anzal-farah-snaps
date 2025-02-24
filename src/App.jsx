
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
}

export default App;