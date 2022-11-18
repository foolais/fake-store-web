import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Store } from "./Pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
