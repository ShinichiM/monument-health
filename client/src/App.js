import "./App.css";
import Questions from "./components/Questions";
import Header from "./components/pages/Header";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header />
      <h4 className="text-4xl font-bold underline text-orange-600">HURRAH!</h4>
      <span className="text-orange-600">TAILWIND WORKS!@ </span>
      <Questions />
    </div>
  );
}

export default App;
