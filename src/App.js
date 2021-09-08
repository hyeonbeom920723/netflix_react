import Nav from "./components/Nav/nav.component";
import Section from "./components/Section/section.component";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Section title="Now Playing" />
      <Section title="Upcoming Movies" />
      <Section title="Popular Movies" />
    </div>
  );
}

export default App;
