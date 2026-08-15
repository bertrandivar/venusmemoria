import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Splash } from "@/components/venus/Splash";
import { Nav } from "@/components/venus/Nav";
import { Hero, Collections, Services, About, Footer } from "@/components/venus/Sections";
import { Contact } from "@/components/venus/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VENUS — The Creation Aura | Atelier d'art sur-mesure" },
      {
        name: "description",
        content:
          "Portraits fine art, résine art, face painting et ateliers artistiques. L'art d'immortaliser l'inestimable.",
      },
      { property: "og:title", content: "VENUS — The Creation Aura" },
      {
        property: "og:description",
        content:
          "Des créations artistiques sur-mesure pour figer vos moments les plus précieux.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Splash hidden={entered} onEnter={() => setEntered(true)} />
      <div
        className={`transition-opacity duration-1000 ${entered ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!entered}
      >
        <Nav
          onLogoClick={() => {
            setEntered(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <main>
          <Hero />
          <Collections />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
