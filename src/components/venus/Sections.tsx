import { useState, useEffect } from "react";
import portrait from "@/assets/portrait.jpg";
import resin from "@/assets/resin.jpg";

/* --- COMPOSANT MODALE EVENT FACE PAINTING --- */
const FACE_PAINTING_IMAGES = [
  "/kids1.webp",
  "/kids2.webp",
  "/kids3.webp",
  "/kids4.webp",
  "/kids5.webp",
];

function FacePaintingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FACE_PAINTING_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookWhatsApp = () => {
    const phoneNumber = "25761200101"; // Remplacez par votre numéro WhatsApp
    const text = encodeURIComponent(
      "Bonjour Venus Memoria ! 🎨 Je souhaite réserver votre service d'Event Face Painting.\n\n" +
      "- Type d’événement (Anniversaire, Gala, Festival, Corporate) : \n" +
      "- Date prévue : \n" +
      "- Lieu / Ville : \n" +
      "- Nombre d'invités estimé : "
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF8F5] text-[#1C1B18] animate-fadeIn">
      {/* Barre Supérieure Fixe */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1C1B18]/10 bg-[#FAF8F5]/95 px-4 py-3 backdrop-blur-md md:px-12 md:py-4">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1C1B18] transition-colors hover:text-[#D4AF37] md:text-sm md:tracking-[0.2em]"
        >
          <span className="text-lg md:text-xl">←</span>
          <span>Retour</span>
        </button>

        <span className="font-serif text-[10px] font-semibold tracking-widest text-[#1C1B18]/70 uppercase sm:text-xs md:text-sm">
          VENUS MEMORIA
        </span>
      </div>

      {/* Conteneur Principal */}
      <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-12">
        {/* Slider */}
        <div className="relative h-[280px] sm:h-[400px] md:h-[580px] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-2xl bg-[#1C1B18]/5">
          {FACE_PAINTING_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === currentSlide
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <img
                src={img}
                alt={`Event Face Painting Venus ${idx + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          {/* Puces */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 md:bottom-6 md:gap-3">
            {FACE_PAINTING_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 md:h-2.5 ${
                  idx === currentSlide
                    ? "w-8 bg-[#D4AF37] md:w-10"
                    : "w-2 bg-white/70 hover:bg-white md:w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Descriptif */}
        <div className="mt-6 md:mt-12 max-w-3xl mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col gap-2 border-b border-[#1C1B18]/10 pb-4 md:flex-row md:items-center md:justify-between md:gap-4 md:pb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] md:text-xs md:tracking-[0.3em]">
                Service Événementiel
              </span>
              <h1 className="font-serif text-2xl font-bold mt-1 text-[#1C1B18] sm:text-3xl md:text-5xl">
                Event Face Painting
              </h1>
            </div>
            <span className="self-start rounded-full bg-[#1C1B18] px-3 py-1.5 text-[10px] font-bold text-[#FAF8F5] uppercase tracking-wider shadow md:self-center md:px-4 md:py-2 md:text-xs">
              Service Sur-Mesure
            </span>
          </div>

          <p className="text-sm leading-relaxed text-[#2C2B26] font-light md:text-lg">
            Transformez vos événements en véritables œuvres d'art vivantes. Que ce soit pour un anniversaire, un festival, une réception privée ou une soirée d'entreprise, nos artistes créent des maquillages éphémères spectaculaires et personnalisés.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 pt-2 md:gap-6">
            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-5 shadow-sm md:p-6">
              <div className="text-xl mb-1.5 md:text-2xl md:mb-2">🌿</div>
              <h3 className="font-serif text-base font-bold text-[#1C1B18] mb-1.5 md:text-lg">
                Produit Sûr & Hypoallergénique
              </h3>
              <p className="text-xs text-[#2C2B26]/80 leading-relaxed md:text-sm">
                Peintures cosmétiques de haute qualité, testées dermatologiquement, sans danger pour la peau et faciles à enlever à l'eau.
              </p>
            </div>

            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-5 shadow-sm md:p-6">
              <div className="text-xl mb-1.5 md:text-2xl md:mb-2">✨</div>
              <h3 className="font-serif text-base font-bold text-[#1C1B18] mb-1.5 md:text-lg">
                Tout Type d'Événement
              </h3>
              <p className="text-xs text-[#2C2B26]/80 leading-relaxed md:text-sm">
                Thématiques variées : super-héros, féerie, motifs néon/UV pour soirées nocturnes et animations corporate.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center md:pt-6">
            <button
              onClick={handleBookWhatsApp}
              className="w-full rounded-xl bg-[#25D366] py-4 text-xs font-bold tracking-[0.1em] text-white uppercase shadow-lg transition-all hover:bg-[#20ba5a] hover:shadow-xl flex items-center justify-center gap-2.5 mx-auto md:w-auto md:px-12 md:py-5 md:text-base md:tracking-[0.15em] md:gap-3"
            >
              <span className="text-lg md:text-xl">💬</span>
              <span>Réserver / Demander un devis WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="accueil" className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 md:py-40">
      <span className="eyebrow text-[10px] sm:text-xs">Atelier d'art — depuis Bujumbura</span>
      <h1 className="mt-4 text-3xl font-normal leading-[1.1] sm:text-5xl md:mt-8 md:text-7xl">
        L'art d'immortaliser <span className="italic text-gilded">l'inestimable.</span>
      </h1>
      <div className="rule-gold mx-auto my-6 w-20 md:my-10 md:w-32" />
      <p className="mx-auto max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
        Des créations artistiques sur-mesure pour figer vos moments les plus précieux.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-12 md:gap-4">
        <a
          href="#collections"
          className="bg-primary px-6 py-3.5 text-[0.6rem] tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:bg-gold hover:text-foreground sm:px-9 sm:py-4 sm:text-[0.65rem] sm:tracking-[0.3em]"
        >
          Explorer nos collections
        </a>
        <a
          href="#galerie"
          className="border border-gold px-6 py-3.5 text-[0.6rem] tracking-[0.25em] text-foreground uppercase transition-colors hover:bg-secondary sm:px-9 sm:py-4 sm:text-[0.65rem] sm:tracking-[0.3em]"
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
    <section id="collections" className="border-t border-border/60 bg-secondary/40 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow text-[10px] sm:text-xs">Collections</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Fine Art Portraits</h2>
          <div className="rule-gold mx-auto my-6 w-20 md:my-8 md:w-24" />
        </div>

        {/* Cartes Gammes */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {tiers.map((t) => (
            <article key={t.name} className="card-lux flex flex-col p-6 text-center md:p-10">
              <h3 className="text-xl md:text-2xl">{t.name}</h3>
              <p className="mt-2 text-[10px] tracking-[0.25em] text-gold uppercase md:mt-3 md:text-xs md:tracking-[0.3em]">{t.size}</p>
              <div className="rule-gold my-5 md:my-7" />
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{t.note}</p>
              <a
                href="#contact"
                className="mt-6 text-[0.6rem] tracking-[0.25em] text-foreground uppercase underline decoration-gold underline-offset-8 md:mt-8 md:text-[0.65rem] md:tracking-[0.3em]"
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>

        {/* Section Résine Art */}
        <div className="mt-16 grid items-center gap-8 md:mt-24 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow text-[10px] sm:text-xs">Résine Art</span>
            <h2 className="mt-3 text-2xl font-serif leading-tight sm:text-3xl md:text-5xl">
              Vos moments précieux, immortalisés dans la résine
            </h2>
            <div className="rule-gold my-6 w-20 md:my-8 md:w-24" />
            <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground md:space-y-5 md:text-sm">
              <li>— <strong>Inclusions de naissance :</strong> première mèche, bracelet de maternité, empreinte.</li>
              <li>— <strong>Souvenirs de mariage :</strong> fleurs du bouquet préservées, dentelle, alliances.</li>
              <li>— <strong>Créations sur-mesure :</strong> objets de mémoire façonnés à la main selon vos envies.</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-gold/40 shadow-lg">
            <img
              src={resin}
              alt="Écrin en résine transparente préservant des fleurs séchées"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="galerie" className="border-t border-border/60 bg-background py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow text-[10px] sm:text-xs">Galerie D'Exposition</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Portraits & Œuvres Réalisées</h2>
          <div className="rule-gold mx-auto my-6 w-20 md:my-8 md:w-24" />
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-muted-foreground md:text-sm">
            Aperçu de nos dernières pièces créées sur-mesure au sein de notre atelier.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-10">
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
                <div className="absolute bottom-0 p-4 text-left md:p-6">
                  <span className="text-[0.55rem] tracking-[0.2em] text-gold uppercase md:text-[0.65rem] md:tracking-[0.25em]">{item.category}</span>
                  <h3 className="mt-1 font-serif text-lg text-foreground md:mt-2 md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground md:mt-2 md:text-xs">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [isFacePaintingOpen, setIsFacePaintingOpen] = useState(false);

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
      <div className="text-center">
        <span className="eyebrow text-[10px] sm:text-xs">Services parallèles</span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">L'atelier hors les murs</h2>
        <div className="rule-gold mx-auto my-6 w-20 md:my-8 md:w-24" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Carte Event Face Painting */}
        <article 
          onClick={() => setIsFacePaintingOpen(true)}
          className="card-lux p-6 cursor-pointer transition-all duration-300 hover:border-gold hover:-translate-y-1 group md:p-12"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl group-hover:text-gold transition-colors sm:text-2xl md:text-3xl">Event Face Painting</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold opacity-80 group-hover:opacity-100 md:text-xs">
              Découvrir →
            </span>
          </div>
          <div className="rule-gold my-4 w-12 md:my-7 md:w-16" />
          <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
            Maquillage artistique professionnel pour événements corporate, réceptions privées et anniversaires. Une signature visuelle sur chaque visage.
          </p>
        </article>

        {/* Carte Art Academy */}
        <article className="card-lux p-6 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl">Art Academy & Ateliers</h3>
          <div className="rule-gold my-4 w-12 md:my-7 md:w-16" />
          <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
            Programmes d'initiation et de perfectionnement pour écoles, ainsi que des camps artistiques pendant les vacances.
          </p>
        </article>
      </div>

      <FacePaintingModal
        isOpen={isFacePaintingOpen}
        onClose={() => setIsFacePaintingOpen(false)}
      />
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 md:py-28">
      <span className="eyebrow text-[10px] sm:text-xs">À Propos</span>
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:mt-4 md:text-5xl">
        Une aura de <span className="italic text-gilded">création et d'émancipation</span>
      </h2>
      <div className="rule-gold mx-auto my-6 w-20 md:my-8 md:w-24" />
      <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
        VENUS est bien plus qu'un atelier d'art dédié à la mémoire : c'est un écosystème vivant et un tremplin pour la communauté artistique. Notre ambition est de faire prospérer chaque talent, en offrant un espace d'expression et de collaboration où les artistes peuvent s'élever ensemble et donner à leurs œuvres une résonance éternelle.
      </p>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 md:py-14">
      <div className="rule-gold mb-6 md:mb-8" />
      <p className="font-display text-xs tracking-[0.25em] uppercase md:text-sm md:tracking-[0.35em]">Venus — The Creation Aura</p>
      <p className="mt-1.5 text-[11px] text-muted-foreground md:mt-2 md:text-xs">Bujumbura, Burundi</p>

      {/* Réseaux Sociaux */}
      <div className="mt-5 flex justify-center gap-4 text-[10px] tracking-widest text-gold uppercase md:mt-6 md:gap-6 md:text-xs">
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
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Facebook
        </a>
        <span>•</span>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          TikTok
        </a>
      </div>

      <p className="mt-5 text-[9px] text-muted-foreground/60 md:mt-6 md:text-[10px]">
        © {new Date().getFullYear()} VENUS Memoria. Tous droits réservés.
      </p>
    </footer>
  );
}
