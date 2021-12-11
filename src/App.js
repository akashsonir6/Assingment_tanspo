import "./App.css";
import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
