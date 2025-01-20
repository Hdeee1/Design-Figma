import Card from "./components/Card";
import DoubleHero from "./components/DoubleHero";
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
      <Title title="Why is Woo-wa so powerful??" />
      <Card />
      <Title title="Why should you use Whatsapp?" />
      <DoubleHero />
    </>
  );
}

export default App;
