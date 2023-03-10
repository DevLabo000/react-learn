import logo from "./logo.svg";
import "./App.css";
import { ExceljsDownload } from "feature/exceljs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExceljsDownload />
      </header>
    </div>
  );
}

export default App;
