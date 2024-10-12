import NavBar from "@/components/common/NavBar"
import FooterBar from "@/components/common/FooterBar"
import HeroSection from "@/components/home/HeroSection"
import BlogSection from "@/components/home/BlogSection"
import AlertSection from "@/components/home/AlertSection"
import { SignedIn } from "@clerk/nextjs"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <SignedIn>
          <AlertSection />
        </SignedIn>
        <NavBar />
      </div>

      <div className="flex flex-col gap-12 md:gap-32 mt-8 md:mt-12 px-4 md:px-20">
        <HeroSection />
        <BlogSection />
      </div>

      <div className="flex flex-col mt-8 md:mt-12">
        <FooterBar />
      </div>
    </main>
  )
}
