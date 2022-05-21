import CardSection from "./components/CardSection/CardSection";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { useGlobalContext } from "./context";

function App() {
  const { showSearch } = useGlobalContext();
  return (
    <div>
      {showSearch && <SearchBar />}
      <header className="header container">
        <Navbar />
      </header>
      <main className="main container">
        <CardSection />
      </main>
      <footer className="footer">
        Created by <a href="https://github.io/yunusa-sanusi">Sanusi Yunusa</a> -{" "}
        <a href="https://devChallenges.io">devChallenges.io</a>
      </footer>
    </div>
  );
}

export default App;
