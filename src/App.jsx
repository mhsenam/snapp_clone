import Downloads from "./components/Downloads";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Downloads />
      <Services />
      <ImageSlider />
    </main>
  );
};
export default App;
