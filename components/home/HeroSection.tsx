import React from "react";
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { gilroyBold } from "@/lib/utils"
import { HeroYoutubeModal } from "./HeroYoutubeModal"
import { FaRocket } from "react-icons/fa"
import { SignUpButton, SignedOut } from '@clerk/nextjs'

function HeroSection() {
  return (
    <section>
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-6xl md:text-[6rem] text-center text-primary md:leading-[5.5rem] my-8 md:my-12"
          )}
        >
          0% Interest, <br /> When We Save <br /> Together!
        </div>

        <p className="mb-8 text-xl md:text-2xl text-center text-slate-700">
          Piltonet goal is to help people around the world to lend and borrow with a trusted network of friends, family, and verified accounts.
        </p>

        <div className="flex gap-3 justify-center">
          <SignedOut>
            <SignUpButton>
              <Button
                size='lg'
                className="h-10 px-4 border-none gap-1 rounded-xl hover:bg-orange-500"
              >
                <FaRocket size={15} className="mr-2" />
                Start now
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>

        <div className="flex w-full justify-center mt-8 md:mt-12">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
