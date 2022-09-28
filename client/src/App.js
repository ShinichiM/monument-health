import "./App.css";
import Questions from "./components/Questions";
import Header from "./components/pages/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recommendation from "./components/Recommendation";
import NoMatch from "./components/pages/NoMatch";

import { useState } from "react";
// <h4 className="text-4xl font-bold underline text-orange-600">HURRAH!</h4>
// <span className="text-orange-600">TAILWIND WORKS!@ </span>

function App() {
  const [response, setResponse] = useState([]);
  return (
    <Router>
      <div className="App h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Questions response={response} setResponse={setResponse} />
            }
          />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route element={NoMatch} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
