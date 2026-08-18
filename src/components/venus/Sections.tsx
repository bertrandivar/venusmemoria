import { useState, useEffect } from "react";
import portrait from "@/assets/portrait.jpg";
import resin from "@/assets/resin.jpg";

/* --- COMPOSANT MODALE EVENT FACE PAINTING --- */
const FACE_PAINTING_IMAGES = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000",
];

function FacePaintingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FACE_PAINTING_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookWhatsApp = () => {
    const phoneNumber = "257XXXXXXXX"; // Remplacez par votre numéro WhatsApp (ex: 25761234567)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-gold/40 p-6 shadow-2xl md:p-8"
        style={{ backgroundColor: "#1C1B18", color: "#F0EFDF" }}
      >
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-2xl font-bold text-gold transition-opacity hover:opacity-70"
        >
          ✕
        </button>

        {/* Carrousel d'images (Slider) */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg border border-gold/30 bg-black/40">
          {FACE_PAINTING_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Event Face Painting Venus ${idx + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Indicateurs / Puces */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {FACE_PAINTING_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? "w-6 bg-gold" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenu descriptif */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/20 pb-3">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold">
              Event Face Painting
            </h2>
            <span className="rounded bg-gold/20 border border-gold/40 px-3 py-1 text-[10px] font-bold text-gold uppercase tracking-widest">
              Service Sur-Mesure
            </span>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
            Transformez vos événements en véritables œuvres d'art vivantes. Que ce soit pour un anniversaire, un festival, une réception privée ou une soirée d'entreprise, nos artistes créent des maquillages éphémères spectaculaires et personnalisés.
          </p>

          {/* Arguments clés & Réassurance */}
          <div className="grid gap-4 md:grid-cols-2 pt-2">
            <div className="rounded border border-gold/20 bg-secondary/20 p-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-1">🌿 Produit Sûr & Hypoallergénique</h4>
              <p className="text-[11px] text-muted-foreground">
                Peintures cosmétiques de haute qualité, testées dermatologiquement, sans danger pour la peau et faciles à enlever à l'eau.
              </p>
            </div>

            <div className="rounded border border-gold/20 bg-secondary/20 p-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-1">✨ Tout Type d'Événement</h4>
              <p className="text-[11px] text-muted-foreground">
                Thématiques variées : super-héros, féerie, motifs néon/UV pour soirées nocturnes et animations corporate.
              </p>
            </div>
          </div>

          {/* Bouton de Réservation WhatsApp */}
          <div className="mt-8 pt-4 border-t border-gold/20">
            <button
              onClick={handleBookWhatsApp}
              className="w-full rounded bg-[#25D366] py-4 text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase shadow-lg transition-all hover:bg-[#20ba5a] flex items-center justify-center gap-2"
            >
              <span>💬 Réserver / Demander un devis sur WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export function Services() {
  const [isFacePaintingOpen, setIsFacePaintingOpen] = useState(false);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <span className="eyebrow">Services parallèles</span>
        <h2 className="mt-4 text-4xl md:text-5xl">L'atelier hors les murs</h2>
        <div className="rule-gold mx-auto my-8 w-24" />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Carte Event Face Painting Cliquable */}
        <article 
          onClick={() => setIsFacePaintingOpen(true)}
          className="card-lux p-12 cursor-pointer transition-all duration-300 hover:border-gold hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-3xl group-hover:text-gold transition-colors">Event Face Painting</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-gold opacity-80 group-hover:opacity-100">
              Découvrir →
            </span>
          </div>
          <div className="rule-gold my-7 w-16" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Maquillage artistique professionnel pour événements corporate, réceptions privées et anniversaires. Une signature visuelle sur chaque visage.
          </p>
        </article>

        {/* Carte Art Academy & Ateliers */}
        <article className="card-lux p-12">
          <h3 className="text-3xl">Art Academy & Ateliers</h3>
          <div className="rule-gold my-7 w-16" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Programmes d'initiation et de perfectionnement pour écoles, ainsi que des camps artistiques pendant les vacances.
          </p>
        </article>
      </div>

      {/* Modale interactive Face Painting */}
      <FacePaintingModal
        isOpen={isFacePaintingOpen}
        onClose={() => setIsFacePaintingOpen(false)}
      />
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
      <p className="mt-2 text-xs text-muted-foreground">Bujumbura, Burundi</p>

      {/* RÉSEAUX SOCIAUX OFFICIELS */}
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

      <p className="mt-6 text-[10px] text-muted-foreground/60">
        © {new Date().getFullYear()} VENUS Memoria. Tous droits réservés.
      </p>
    </footer>
  );
}
