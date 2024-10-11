import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import YoutubeIframe from "../common/YoutubeIFrame";
import AnimatedBorderTrail from "../common/AnimatedBorderTrail";

export function HeroYoutubeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src="/images/hero-background.webp"
          alt="Piltonet on Youtube"
          className="filter grayscale hover:filter-none hover:cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="p-2 min-w-full md:min-w-[calc(100vw-800px)]">
        <AnimatedBorderTrail trailSize="lg">
          <YoutubeIframe
            videoId="I2KSR8qQoNo"
            autoPlay
            title="Piltonet - Web3 Lending Circles"
          />
        </AnimatedBorderTrail>
      </DialogContent>
    </Dialog>
  );
}
