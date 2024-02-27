import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="mx-[165px] mt-[89px] max-h-[1024px] max-w-[1440px]">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
      </div>
    </>
  );
}

export default App;
