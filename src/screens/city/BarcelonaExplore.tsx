import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../../components/SearchBar";
import { AccountSidebar } from "../../components/AccountSidebar";

const categoryVideos = {
  beach: "/videos/barcelona-beach.mp4",
  gothic: "/videos/barcelona-gothic.mp4",
  // Nou Camp (stadium)
  nouCamp: "/videos/barcelona-stadium.mp4",
  // Park Güell  (ü -> %C3%BC)
  park: "/videos/Barcelona-park-g%C3%BCell.mp4",
  // Sagrada Família (í -> %C3%AD)
  sagrada: "/videos/Barcelona-sagrada-fam%C3%ADlia.mp4",
};

type PropertyCard = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  link: string;
  previewVideo: string;
};

type CategoryRow = {
  id: string;
  label: string;
  description: string;
  previewVideo: string;
  properties: PropertyCard[];
};

const barcelonaCategories: CategoryRow[] = [
  {
    id: "beach",
    label: "Close to the Beach",
    description: "Stays near Barceloneta & the seafront.",
    previewVideo: "/videos/barcelona-beach.mp4",
    properties: [
      {
        id: "bcn-01",
        title: "Sea-view loft in Barceloneta",
        subtitle: "1 bedroom · Balcony · Sea breeze",
        price: "€220 / night",
        link: "/property/000001",
        previewVideo: "/videos/listings/barcelona-loft-beach.mp4",
      },
      {
        id: "bcn-02",
        title: "Bright studio by the marina",
        subtitle: "Sleeps 2 · 5 min walk to sand",
        price: "€180 / night",
        link: "/property/000002",
        previewVideo: "/videos/listings/barcelona-marina.mp4",
      },
      {
        id: "bcn-03",
        title: "Family apartment near the boardwalk",
        subtitle: "2 bedrooms · Pool access",
        price: "€260 / night",
        link: "/property/000003",
        previewVideo: "/videos/listings/barcelona-boardwalk.mp4",
      },
    ],
  },
  {
    id: "nou-camp",
    label: "Close to the Nou Camp",
    description: "For match-day weekends & stadium tours.",
    previewVideo: "/videos/barcelona-noucamp.mp4",
    properties: [
      {
        id: "bcn-04",
        title: "Modern flat next to the stadium",
        subtitle: "2 bedrooms · Balcony · Metro 2 min",
        price: "€210 / night",
        link: "/property/000004",
        previewVideo: "/videos/listings/barcelona-stadium-flat.mp4",
      },
      {
        id: "bcn-05",
        title: "Design loft in Les Corts",
        subtitle: "Sleeps 3 · Coffee spots all around",
        price: "€190 / night",
        link: "/property/000005",
        previewVideo: "/videos/listings/barcelona-lescorts.mp4",
      },
    ],
  },
  {
    id: "sagrada",
    label: "Near Sagrada Família",
    description: "Views of Gaudí's masterpiece.",
    previewVideo: "/videos/barcelona-sagrada.mp4",
    properties: [
      {
        id: "bcn-06",
        title: "Penthouse with basilica view",
        subtitle: "Terrace · 1 bedroom · Sunset ready",
        price: "€280 / night",
        link: "/property/000006",
        previewVideo: "/videos/listings/barcelona-penthouse-sagrada.mp4",
      },
      {
        id: "bcn-07",
        title: "Calm hideout in Eixample",
        subtitle: "2 bedrooms · Quiet street",
        price: "€230 / night",
        link: "/property/000007",
        previewVideo: "/videos/listings/barcelona-eixample.mp4",
      },
    ],
  },
  {
    id: "gothic",
    label: "Gothic Quarter & Las Ramblas",
    description: "Stay in the old city's maze of streets.",
    previewVideo: "/videos/barcelona-gothic.mp4",
    properties: [
      {
        id: "bcn-08",
        title: "Stone-walled studio in the Gothic Quarter",
        subtitle: "Walk everywhere · Bars & tapas",
        price: "€200 / night",
        link: "/property/000008",
        previewVideo: "/videos/listings/barcelona-gothic-studio.mp4",
      },
      {
        id: "bcn-09",
        title: "Ramblas balcony apartment",
        subtitle: "3rd floor · Street views · 2 guests",
        price: "€210 / night",
        link: "/property/000009",
        previewVideo: "/videos/listings/barcelona-ramblas.mp4",
      },
    ],
  },
  {
    id: "park-guell",
    label: "Near Park Güell",
    description: "Colourful hills, views over the city.",
    previewVideo: "/videos/barcelona-parkguell.mp4",
    properties: [
      {
        id: "bcn-10",
        title: "Hilltop casita above Park Güell",
        subtitle: "Garden · 2 bedrooms · City views",
        price: "€240 / night",
        link: "/property/000010",
        previewVideo: "/videos/listings/barcelona-hilltop.mp4",
      },
    ],
  },
];

type PreviewState = {
  src: string;
  label: string;
} | null;

const BarcelonaExplore: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const heroRef = useRef<HTMLVideoElement | null>(null);
  const [preview, setPreview] = useState<PreviewState>(null);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroSrc, setHeroSrc] = useState("/videos/barcelona-city.mp4");
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Pause / play hero when a preview is active
  useEffect(() => {
    const video = heroRef.current;
    if (!video) return;

    if (heroPaused) {
      video.pause();
    } else {
      video.play().catch(() => {
        /* ignore autoplay errors */
      });
    }
  }, [heroPaused]);

  const startPreview = (src: string, label: string) => {
    setPreview({ src, label });
    setHeroPaused(true);
  };

  const endPreview = () => {
    setPreview(null);
    setHeroPaused(false);
  };

  const handleSearchSubmit = (city: string) => {
    // Simple: route to `/city/<city>`
    const slug = city.toLowerCase().replace(/\s+/g, "-");
    navigate(`/city/${slug}`);
  };

  const playCategoryVideo = (src: string) => {
    if (heroRef.current) {
      heroRef.current.src = src;
      heroRef.current.play();
    }
  };

  const resetHeroVideo = () => {
    if (heroRef.current) {
      heroRef.current.src = "/videos/barcelona-city.mp4";
      heroRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-[#070a0d] text-white">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <img
          src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo-1.svg"
          alt="AtlasOra"
          className="h-10 flex-shrink-0"
        />

        {/* Search bar in the middle */}
        <div className="flex-1 max-w-xl mx-auto">
          <SearchBar
            locationLabel="Barcelona"
            onSubmit={handleSearchSubmit}
          />
        </div>

        {/* My Account / Login button */}
        <button
          className="px-6 py-2 rounded-full bg-[#ffa873] text-black font-semibold shadow-lg shadow-black/30 hover:bg-[#ffb98d] transition"
          onClick={() => {
            if (!isAuthenticated) {
              loginWithRedirect({
                appState: { returnTo: window.location.pathname },
              });
            } else {
              setIsAccountOpen(true);
            }
          }}
          disabled={isLoading}
        >
          {isAuthenticated ? "My Account" : "Login"}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="relative w-full h-[75vh] overflow-hidden">
          <video
            ref={heroRef}
            src={heroSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070a0d] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-8 flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Stays in <span className="text-[#f79b6a]">Barcelona</span>
            </h1>
            <p className="max-w-xl text-sm text-neutral-200">
              Explore beachfront lofts, Gothic corners, and views of Gaudí. Pick
              a vibe and let AtlasOra do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="px-10 pt-8">
        <div className="flex flex-wrap gap-4">
          <button
            onMouseEnter={() => playCategoryVideo(categoryVideos.beach)}
            onMouseLeave={resetHeroVideo}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-neutral-200 hover:border-[#f79b6a] hover:text-[#f79b6a] transition"
          >
            Close to the beach
          </button>
          <button
            onMouseEnter={() => playCategoryVideo(categoryVideos.nouCamp)}
            onMouseLeave={resetHeroVideo}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-neutral-200 hover:border-[#f79b6a] hover:text-[#f79b6a] transition"
          >
            Close to the Nou Camp
          </button>
          <button
            onMouseEnter={() => playCategoryVideo(categoryVideos.park)}
            onMouseLeave={resetHeroVideo}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-neutral-200 hover:border-[#f79b6a] hover:text-[#f79b6a] transition"
          >
            Close to Park Güell
          </button>
          <button
            onMouseEnter={() => playCategoryVideo(categoryVideos.sagrada)}
            onMouseLeave={resetHeroVideo}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-neutral-200 hover:border-[#f79b6a] hover:text-[#f79b6a] transition"
          >
            Close to Sagrada Família
          </button>
          <button
            onMouseEnter={() => playCategoryVideo(categoryVideos.gothic)}
            onMouseLeave={resetHeroVideo}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-neutral-200 hover:border-[#f79b6a] hover:text-[#f79b6a] transition"
          >
            In the Gothic Quarter
          </button>
        </div>
      </section>

      {/* ROWS OF PROPERTIES */}
      <main className="px-10 pb-20 pt-6">
        {barcelonaCategories.map((cat) => (
          <section key={cat.id} className="mt-8">
            <div className="mb-3 flex items-baseline justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {cat.label}
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  {cat.description}
                </p>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {cat.properties.map((p) => (
                <button
                  key={p.id}
                  onClick={() => navigate(p.link)}
                  onMouseEnter={() =>
                    startPreview(p.previewVideo, `${p.title} – preview`)
                  }
                  onMouseLeave={endPreview}
                  className="group relative w-[250px] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-[#f79b6a]/80 hover:-translate-y-1.5 hover:shadow-xl transition"
                >
                  {/* Thumbnail placeholder – you'll swap in video or image */}
                  <div className="relative h-[150px] w-full bg-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#f79b6a15,transparent_60%),radial-gradient(circle_at_80%_0%,#fce2c515,transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
                      Video / image slot
                    </div>
                  </div>
                  <div className="p-3 text-left">
                    <div className="text-sm font-semibold text-white">
                      {p.title}
                    </div>
                    <div className="mt-1 text-xs text-neutral-400">
                      {p.subtitle}
                    </div>
                    <div className="mt-2 text-xs font-medium text-[#f79b6a]">
                      {p.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* HOVER PREVIEW POP-OUT */}
      {preview && (
        <div className="pointer-events-none fixed bottom-8 right-8 z-40 w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur">
          <video
            src={preview.src}
            autoPlay
            muted
            loop
            className="h-[190px] w-full object-cover"
          />
          <div className="px-4 py-2 text-xs font-medium text-white">
            {preview.label}
          </div>
        </div>
      )}

      <AccountSidebar
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
};

export default BarcelonaExplore;

