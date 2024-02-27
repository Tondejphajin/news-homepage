import Banner from "./Banner";
import NewSection from "./NewSection";

export default function HeroSection() {
  return (
    <main className="mt-[32px] md:mt-[55.1px]">
      <div className="grid grid-cols-[343px] md:grid-cols-[730px_350px] md:gap-[30px]">
        <div className="w-[375px]">
          <Banner></Banner>
        </div>
        <div className="mt-[64px] h-[489px] bg-dark-space-blue md:w-[350px]">
          <NewSection></NewSection>
        </div>
      </div>
    </main>
  );
}
