import "./App.css";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="grid-container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
