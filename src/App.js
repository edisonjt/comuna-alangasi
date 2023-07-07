import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    // <div style={{ backgroundColor: '#a6c6ff' }}>
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(221,250,252,1) 50%, rgba(192,228,236,1) 100%)",
      }}
    >
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
