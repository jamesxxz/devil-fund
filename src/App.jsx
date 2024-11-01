import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/projects" />
        <Route path="/tractions" />
      </Routes>
    </Router>
  );
}

export default App;
