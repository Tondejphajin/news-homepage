import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-[89px] max-h-[1024px] max-w-[1110px]">
          <NavBar></NavBar>
          <HeroSection></HeroSection>
          <FeatureSection></FeatureSection>
        </div>
      </div>
    </>
  );
}

export default App;
