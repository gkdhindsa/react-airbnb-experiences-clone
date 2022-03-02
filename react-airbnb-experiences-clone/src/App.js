
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data.js'
function App() {
  const cards=data.map( item => {
    return  <Card 
    {...item}
  />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="card-container container">
        {cards}
      </div>
    </div>
  );
}

export default App;
