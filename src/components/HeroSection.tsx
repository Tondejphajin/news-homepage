import Banner from "./Banner";
import NewSection from "./NewSection";

export default function HeroSection() {
  return (
    <main className="mt-[55.1px]">
      <div className="grid grid-cols-[700px_350px] gap-[30px]">
        <div className="w-[700px]">
          <Banner></Banner>
        </div>
        <div className="w-[350px] bg-dark-space-blue">
          <NewSection></NewSection>
        </div>
      </div>
    </main>
  );
}
