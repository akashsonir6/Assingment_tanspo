import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trips" element={<Dashboard />} />
          <Route path="/tracking" element={<Dashboard />} />
          <Route path="/transprter" element={<Dashboard />} />
          <Route path="/analysic" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
