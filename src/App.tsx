import logo from "./logo.svg";
import "./App.css";
import { ExceljsDownload } from "@/feature/exceljs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="h-52 w-52">
          <img className="h-12 w-12 App-logo" src={logo} alt="logo" />
        </div>
        <ExceljsDownload />
      </header>
    </div>
  );
}

export default App;
