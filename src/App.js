import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponents } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
