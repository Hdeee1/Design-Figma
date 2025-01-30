import Accordion from "./components/Accordion";
import Bundle from "./components/Bundle";
import Card from "./components/Card";
import DoubleHero from "./components/DoubleHero";
import Footer from "./components/Footer";
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
      <HeroBottom />
      <Title title="Those who have used Woo-Wa" />
      <Testimonial />
      <Bundle />
      <Title title="FAQ" />
      <div className="p-20 flex flex-col gap-[40px] ">
        <Accordion content="What is WOOWA" />
        <Accordion content="How does Woowa work?" />
        <Accordion content="Can I Send Mass Messages (Broadcast)?" />
        <Accordion content="Whose number is the sender of the message?" />
        <Accordion content="Can my WA be blocked if I use a private number?" />
        <Accordion content="Is this service official from the WhatsApp company??" />
        <Accordion content="how much do I stay signed in to WhatsApp Web on my personal computer?" />
        <Accordion content="If I have subscribed per year and then the service suddenly dies, is there a refund?" />
      </div>

      <Footer />
    </>
  );
}

export default App;
