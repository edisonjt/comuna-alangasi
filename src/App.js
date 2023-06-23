import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div style={{ backgroundColor: '#a6c6ff' }}>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
