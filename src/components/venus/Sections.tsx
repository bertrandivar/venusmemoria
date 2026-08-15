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
          href="#galerie"
          className="border border-gold px-9 py-4 text-[0.65rem] tracking-[0.3em] text-foreground uppercase transition-colors hover:bg-secondary"
        >
          Découvrir la Galerie
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

/* --- NOUVELLE SECTION GALERIE DE PORTRAITS ET OEUVRES REALISEES --- */
const galleryItems = [
  {
    title: "Portrait Fine Art Sur Toile",
    category: "Gamme Prestige",
    image: portrait,
    description: "Huile sur toile et détails appliqués à la feuille d'or 24 carats.",
  },
  {
    title: "Écrin d'Inclusion en Résine",
    category: "Résine Art",
    image: resin,
    description: "Conservation de souvenirs familiaux dans une résine cristal ultra-claire.",
  },
  {
    title: "Portrait de Famille Signature",
    category: "Gamme Standard",
    image: portrait,
    description: "Création faite main célébrant les liens précieux.",
  },
];

export function Gallery() {
  return (
    <section id="galerie" className="border-t border-border/60 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="eyebrow">Galerie D'Exposition</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Portraits & Œuvres Réalisées</h2>
          <div className="rule-gold mx-auto my-8 w-24" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Aperçu de nos dernières pièces créées sur-mesure au sein de notre atelier.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={index} className="group card-lux overflow-hidden p-0 border border-border/60 transition-all hover:border-gold">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                <div className="absolute bottom-0 p-6 text-left">
                  <span className="text-[0.65rem] tracking-[0.25em] text-gold uppercase">{item.category}</span>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
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
          confiée, travaillée à la hand avec des matériaux nobles, jusqu'à devenir une
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
      <p className="mt-2 text-xs text-muted-foreground">Bujumbura, Burundi</p>

      {/* RÉSALS SOCIAUX OFFICIELS */}
      <div className="mt-6 flex justify-center gap-6 text-xs tracking-widest text-gold uppercase">
        <a
          href="https://www.instagram.com/venusmemoria?igsh=bHZqcTRwaG9hM251"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <span>•</span>
        <a
          href="https://facebook.com" /* REMPLACER PAR VOTRE LIEN FACEBOOK QUAND DISPONIBLE */
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Facebook
        </a>
        <span>•</span>
        <a
          href="https://tiktok.com" /* REMPLACER PAR VOTRE LIEN TIKTOK QUAND DISPONIBLE */
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          TikTok
        </a>
      </div>

      <p className="mt-6 text-[10px] text-muted-foreground/60">
        © {new Date().getFullYear()} VENUS Memoria. Tous droits réservés.
      </p>
    </footer>
  );
}
