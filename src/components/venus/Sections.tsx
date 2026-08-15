import portrait from "@/assets/portrait.jpg";
import resin from "@/assets/resin.jpg";

export function Hero() {
  return (
    <section id="accueil" className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
      <span className="eyebrow">Atelier d'art — depuis Bujumbura</span>
      <h1 className="mt-8 text-5xl leading-[1.05] md:text-7xl">
        L'art d'immortaliser <span className="italic text-gilded">l'inestimable.</span>
      </h1>
      <div className="rule-gold mx-auto my-10 w-32" />
      <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
        Des créations artistiques sur-mesure pour figer vos moments les plus précieux.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="#collections"
          className="bg-primary px-9 py-4 text-[0.65rem] tracking-[0.3em] text-primary-foreground uppercase transition-colors hover:bg-gold hover:text-foreground"
        >
          Explorer nos collections
        </a>
        <a
          href="#services"
          className="border border-gold px-9 py-4 text-[0.65rem] tracking-[0.3em] text-foreground uppercase transition-colors hover:bg-secondary"
        >
          Nos Services
        </a>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Gamme Prestige",
    size: "1 m × 1 m",
    note: "Grand format signature, finition galerie et cadre doré à la feuille.",
  },
  {
    name: "Gamme Standard",
    size: "50 cm × 70 cm",
    note: "Le format le plus demandé, idéal pour un portrait de famille.",
  },
  {
    name: "Gamme Essentielle",
    size: "40 cm × 50 cm",
    note: "Un portrait intime, parfait en cadeau d'exception.",
  },
];

export function Collections() {
  return (
    <section id="collections" className="border-t border-border/60 bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="eyebrow">Collections</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Fine Art Portraits</h2>
          <div className="rule-gold mx-auto my-8 w-24" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((t) => (
            <article key={t.name} className="card-lux flex flex-col p-10 text-center">
              <h3 className="text-2xl">{t.name}</h3>
              <p className="mt-3 text-xs tracking-[0.3em] text-gold uppercase">{t.size}</p>
              <div className="rule-gold my-7" />
              <p className="text-sm leading-relaxed text-muted-foreground">{t.note}</p>
              <a
                href="#contact"
                className="mt-8 text-[0.65rem] tracking-[0.3em] text-foreground uppercase underline decoration-gold underline-offset-8"
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <img
            src={portrait}
            alt="Portrait peint à la main sur chevalet dans l'atelier"
            width={1200}
            height={1500}
            loading="lazy"
            className="w-full border border-gold/40 object-cover"
          />
          <div>
            <span className="eyebrow">Résine Art</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Précieux souvenirs, figés dans la lumière</h2>
            <div className="rule-gold my-8 w-24" />
            <ul className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <li>— Inclusions de naissance : première mèche, bracelet, empreinte.</li>
              <li>— Souvenirs de mariage : bouquet préservé, dentelle, alliances.</li>
              <li>— Objets précieux personnalisés, façonnés à la demande.</li>
            </ul>
            <img
              src={resin}
              alt="Bloc de résine transparente avec fleurs séchées et éclats d'or"
              width={1200}
              height={1500}
              loading="lazy"
              className="mt-10 h-72 w-full border border-gold/40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Event Face Painting",
    text: "Maquillage artistique professionnel pour événements corporate, réceptions privées et anniversaires. Une signature visuelle sur chaque visage.",
  },
  {
    title: "Art Academy & Ateliers",
    text: "Programmes d'initiation et de perfectionnement pour écoles, ainsi que des camps artistiques pendant les vacances.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <span className="eyebrow">Services parallèles</span>
        <h2 className="mt-4 text-4xl md:text-5xl">L'atelier hors les murs</h2>
        <div className="rule-gold mx-auto my-8 w-24" />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="card-lux p-12">
            <h3 className="text-3xl">{s.title}</h3>
            <div className="rule-gold my-7 w-16" />
            <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="border-y border-border/60 bg-secondary/40 py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">À propos</span>
        <h2 className="mt-4 text-4xl md:text-5xl">
          Une aura de <span className="italic text-gilded">création</span>
        </h2>
        <div className="rule-gold mx-auto my-8 w-24" />
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          VENUS est un atelier d'art dédié à la mémoire. Chaque œuvre naît d'une histoire
          confiée, travaillée à la main avec des matériaux nobles, jusqu'à devenir une
          pièce unique que le temps ne peut plus effacer.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-14 text-center">
      <div className="rule-gold mb-8" />
      <p className="font-display text-sm tracking-[0.35em] uppercase">Venus — The Creation Aura</p>
      <p className="mt-3 text-xs text-muted-foreground">@VenusMemoria · Bujumbura, Burundi</p>
    </footer>
  );
}
