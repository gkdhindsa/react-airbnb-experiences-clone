
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div>
        <Card 
          img="./katie.png"
          rating="5.0"
          reviewCount="30"
          title="Something with Katie"
          price="136"
        />
      </div>
    </div>
  );
}

export default App;
