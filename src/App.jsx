import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Title from "./components/Title";


function App() {
  return (
    <>
    <div className="h-dvh">
      <Navbar />
      <Hero />
      </div>
      <Title title='Why is Woo-wa so powerful??'/>
      <Card/>
    </>
  );
}

export default App;
