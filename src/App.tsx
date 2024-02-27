import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="mx-auto mt-[89px] flex max-w-[1110px] flex-col items-center justify-center">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
      </div>
    </>
  );
}

export default App;
