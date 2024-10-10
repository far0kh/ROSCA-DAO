import NavBar from "@/components/common/NavBar";
import FooterBar from "@/components/common/FooterBar";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col">
        <NavBar />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        <HeroSection />
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        <FooterBar />
      </div>
    </main>
  );
}
