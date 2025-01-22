import Card from "./components/Card";
import DoubleHero from "./components/DoubleHero";
import Hero from "./components/Hero";
import HeroBottom from "./components/HeroBottom";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
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
      <HeroBottom/>
      <Title title='Those who have used Woo-Wa'/>
      <Testimonial/>
    </>
  );
}

export default App;
