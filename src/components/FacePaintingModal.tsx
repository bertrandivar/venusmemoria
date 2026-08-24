import { useState, useEffect } from "react";

interface FacePaintingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Images dans le dossier public
const FACE_PAINTING_IMAGES = [
  "/kids0.webp",
  "/kids1.webp",
  "/kids2.webp",
  "/kids3.webp",
  "/kids4.webp",
  "/kids5.webp",
];

export function FacePaintingModal({ isOpen, onClose }: FacePaintingModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Transition automatique toutes les 6 secondes (6000ms)
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
      "Bonjour Venus Memoria ! 🎨 Je souhaite réserver votre service d'Event Face Painting pour un événement.\n\n" +
      "- Type d'événement (Anniversaire, Gala, Festival, Corporate) : \n" +
      "- Date prévue : \n" +
      "- Nombre d'invités estimé : "
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FDFBF7] text-[#1C1B18] animate-fadeIn">
      {/* Barre Supérieure Fixe / Navigation */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1C1B18]/10 bg-[#FDFBF7]/90 px-4 py-3 backdrop-blur-md md:px-12 md:py-4">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1C1B18] transition-colors hover:text-[#D4AF37] md:text-sm md:tracking-[0.2em]"
        >
          <span className="text-base md:text-lg">←</span>
          <span>Retour</span>
        </button>

        <span className="font-serif text-[11px] font-semibold tracking-wide text-[#1C1B18]/70 uppercase sm:text-xs md:text-base">
          VENUS MEMORIA
        </span>
      </div>

      {/* Conteneur Principal */}
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-12">
        {/* SLIDER (Hauteur adaptable mobile/desktop) */}
        <div className="relative h-[280px] sm:h-[400px] md:h-[600px] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-xl bg-[#1C1B18]/5">
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
                alt={`Face Painting Venus Memoria ${idx + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}

          {/* Indicateurs / Puces */}
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

        {/* SECTION CONTENU & DETAILS */}
        <div className="mt-6 md:mt-14 max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* En-tête du service */}
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
              Sur Devis & Réservation
            </span>
          </div>

          {/* Description principale */}
          <p className="text-sm leading-relaxed text-[#2C2B26]/90 font-light md:text-lg">
            Transformez vos événements en véritables performances visuelles. Que ce soit pour un mariage prestige, un festival, une réception privée ou une soirée d'entreprise, nos artistes façonnent des maquillages artistiques et éphémères adaptés à vos thématiques.
          </p>

          {/* Cartes d'Avantages */}
          <div className="grid gap-4 sm:grid-cols-2 pt-2 md:gap-6 md:pt-4">
            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-5 shadow-sm md:p-6">
              <div className="text-xl mb-1.5 md:text-2xl md:mb-2">🌿</div>
              <h3 className="font-serif text-base font-bold text-[#1C1B18] mb-1.5 md:text-lg">
                Produits Sûrs & Hypoallergéniques
              </h3>
              <p className="text-xs text-[#2C2B26]/80 leading-relaxed md:text-sm">
                Utilisation exclusive de peinture de qualité cosmétique professionnelle. Douce pour la peau, non toxique et nettoyable simplement à l'eau claire.
              </p>
            </div>

            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-5 shadow-sm md:p-6">
              <div className="text-xl mb-1.5 md:text-2xl md:mb-2">✨</div>
              <h3 className="font-serif text-base font-bold text-[#1C1B18] mb-1.5 md:text-lg">
                Concepts Multi-Thématiques
              </h3>
              <p className="text-xs text-[#2C2B26]/80 leading-relaxed md:text-sm">
                Animations personnalisées pour enfants et adultes : créations poétiques, effets néon/UV sous lumière noire, et body-art sur-mesure.
              </p>
            </div>
          </div>

          {/* Bouton WhatsApp */}
          <div className="pt-4 text-center md:pt-8">
            <button
              onClick={handleBookWhatsApp}
              className="w-full rounded-xl bg-[#25D366] py-4 text-xs font-bold tracking-[0.1em] text-white uppercase shadow-lg transition-all hover:bg-[#20ba5a] hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 mx-auto md:w-auto md:px-12 md:py-5 md:text-base md:tracking-[0.15em] md:gap-3"
            >
              <span className="text-lg md:text-xl">💬</span>
              <span>Réserver / Demander un devis WhatsApp</span>
            </button>
            <p className="mt-2.5 text-[11px] text-[#1C1B18]/60 md:mt-3 md:text-xs">
              Réponse rapide garantie par notre équipe pour fixer les dates et détails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
