import { useEffect, useRef } from "react";

type HeroVideoSectionProps = {
  videoSrc?: string;
};

export const HeroVideoSection = ({ videoSrc = "/videos/hero.mp4" }: HeroVideoSectionProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Start at 3s and always loop from 3s → end → 3s
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_AT = 3; // seconds

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = START_AT;
      } catch {
        // ignore seek errors
      }
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration) {
        video.currentTime = START_AT;
        video.play().catch(() => undefined);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-full h-[789px]">
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </section>
  );
};

