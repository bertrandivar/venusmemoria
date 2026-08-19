import { useState, useEffect } from "react";

interface FacePaintingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Vos images importées dans le dossier public
const FACE_PAINTING_IMAGES = [
  "/kids1.webp",
  "/kids2.webp",
  "/kids3.webp",
  "/kids4.webp",
  "/kids5.webp",
];

export function FacePaintingModal({ isOpen, onClose }: FacePaintingModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Transition plus lente : changement toutes les 6 secondes (6000ms)
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FACE_PAINTING_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookWhatsApp = () => {
    const phoneNumber = "257XXXXXXXX"; // Remplacez par votre numéro WhatsApp
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
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1C1B18]/10 bg-[#FDFBF7]/90 px-6 py-4 backdrop-blur-md md:px-12">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#1C1B18] transition-colors hover:text-[#D4AF37]"
        >
          <span className="text-lg">←</span>
          <span>Retour aux services</span>
        </button>

        <span className="font-serif text-sm md:text-base font-semibold tracking-wide text-[#1C1B18]/70">
          VENUS MEMORIA — ATELIER
        </span>
      </div>

      {/* Conteneur Principal */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        
        {/* GRAND SLIDER EN HAUT (Hauteur XL avec effet Dissolve) */}
        <div className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-xl bg-[#1C1B18]/5">
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
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}

          {/* Indicateurs / Puces Éléganes */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
            {FACE_PAINTING_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "w-10 bg-[#D4AF37]"
                    : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* SECTION CONTENU & DETAILS */}
        <div className="mt-10 md:mt-14 max-w-4xl mx-auto space-y-8">
          
          {/* En-tête du service */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1C1B18]/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D4AF37]">
                Service Événementiel
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mt-1 text-[#1C1B18]">
                Event Face Painting
              </h1>
            </div>
            <span className="self-start md:self-center rounded-full bg-[#1C1B18] px-4 py-2 text-xs font-bold text-[#FAF8F5] uppercase tracking-wider shadow">
              Sur Devis & Réservation
            </span>
          </div>

          {/* Description principale */}
          <p className="text-base md:text-lg leading-relaxed text-[#2C2B26]/90 font-light">
            Transformez vos événements en véritables performances visuelles. Que ce soit pour un mariage prestige, un festival, une réception privée ou une soirée d'entreprise, nos artistes façonnent des maquillages artistiques et éphémères adaptés à vos thématiques.
          </p>

          {/* Cartes d'Avantages / Arguments Marketing */}
          <div className="grid gap-6 md:grid-cols-2 pt-4">
            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-6 shadow-sm">
              <div className="text-2xl mb-2">🌿</div>
              <h3 className="font-serif text-lg font-bold text-[#1C1B18] mb-2">
                Produits Sûrs & Hypoallergéniques
              </h3>
              <p className="text-xs md:text-sm text-[#2C2B26]/80 leading-relaxed">
                Utilisation exclusive de peinture de qualité cosmétique professionnelle. Douce pour la peau, non toxique et nettoyable simplement à l'eau claire.
              </p>
            </div>

            <div className="rounded-xl border border-[#1C1B18]/10 bg-white p-6 shadow-sm">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-serif text-lg font-bold text-[#1C1B18] mb-2">
                Concepts Multi-Thématiques
              </h3>
              <p className="text-xs md:text-sm text-[#2C2B26]/80 leading-relaxed">
                Animations personnalisées pour enfants et adultes : créations poétiques, effets néon/UV sous lumière noire, et body-art sur-mesure.
              </p>
            </div>
          </div>

          {/* CTA / Bouton WhatsApp Principal */}
          <div className="pt-8 text-center">
            <button
              onClick={handleBookWhatsApp}
              className="w-full md:w-auto md:px-12 rounded-xl bg-[#25D366] py-5 text-sm md:text-base font-bold tracking-[0.15em] text-white uppercase shadow-lg transition-all hover:bg-[#20ba5a] hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 mx-auto"
            >
              <span className="text-xl">💬</span>
              <span>Réserver / Demander un devis sur WhatsApp</span>
            </button>
            <p className="mt-3 text-xs text-[#1C1B18]/60">
              Réponse rapide garantie par notre équipe pour fixer les dates et détails.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
