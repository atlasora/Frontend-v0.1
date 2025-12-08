import { HeroVideoSection } from "../../components/HeroVideoSection";
import { VideoOverlayHeader } from "../../components/VideoOverlayHeader";
// Import the Anima sections you uploaded
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { PropertyDetailsSection } from "./sections/PropertyDetailsSection";
import { FooterSection } from "./sections/FooterSection";

// Optional: a wrapper for spacing
export const Property000001 = (): JSX.Element => {
  return (
    <div className="bg-[#070a0d] w-full min-h-screen flex flex-col items-center">
      <div className="relative w-full">
        <HeroVideoSection videoSrc="/videos/barcelona-kitchen.mp4" />
        <VideoOverlayHeader />
      </div>

      <main className="w-full max-w-[1600px] px-10 pt-12 pb-24 flex flex-col gap-20">
        <ImageGallerySection />
        <PropertyDetailsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Property000001;
