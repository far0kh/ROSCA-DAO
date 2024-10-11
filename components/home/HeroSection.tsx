import React from "react";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";

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

        <div className="flex gap-[12px] justify-center">
          <MainButton
            text="Get Started"
            size="small"
            className="border-none rounded-[12px]"
          />
          {/* <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          /> */}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
