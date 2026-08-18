import { useState, useEffect } from "react";

interface FacePaintingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Remplacez ces images par vos propres réalisations dans src/assets/
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000",
];

export function FacePaintingModal({ isOpen, onClose }: FacePaintingModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique du carrousel toutes les 3,5 secondes
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookWhatsApp = () => {
    const phoneNumber = "257XXXXXXXX"; // Remplacez par votre numéro WhatsApp sans le '+'
    const text = encodeURIComponent(
      "Bonjour Venus Memoria ! 🎨 Je souhaite réserver votre service d'Event Face Painting pour un événement.\n\n" +
      "- Type d'événement (Anniversaire, Gala, Festival, Corporate) : \n" +
      "- Date prévue : \n" +
      "- Nombre d'invités estimé : "
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[#D4AF37]/40 p-6 shadow-2xl md:p-8"
        style={{ backgroundColor: "#FAF8F5", color: "#1C1B18" }}
      >
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-black/10 hover:text-[#D4AF37]"
        >
          ✕
        </button>

        {/* Carrousel d'images (Slider) */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg border border-[#1C1B18]/10 bg-black/5">
          {GALLERY_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Face Painting Venus Memoria ${idx + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transition: "opacity 0.7s ease-in-out, transform 4s ease-out" }}
            />
          ))}

          {/* Indicateurs / Puces */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? "w-6 bg-[#D4AF37]" : "w-2 bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenu descriptif */}
        <div className="mt-6 space-y-4 text-[#1C1B18]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1C1B18]/10 pb-3">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1B18]">
              Event Face Painting
            </h2>
            <span className="rounded bg-[#1C1B18] px-3 py-1 text-xs font-bold text-[#FAF8F5] uppercase tracking-wider">
              Service Sur-Mesure
            </span>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-[#2C2B26]">
            Transformez vos événements en expériences visuelles inoubliables. Que ce soit pour un festival, un mariage, un anniversaire ou une soirée d'entreprise, nos artistes créent des maquillages éphémères spectaculaires adaptés à vos thématiques.
          </p>

          {/* Argumentaire & Engagements */}
          <div className="grid gap-3 md:grid-cols-2 pt-2">
            <div className="rounded-lg border border-[#1C1B18]/10 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">🌿 Produit Sûr & Doux</h4>
              <p className="text-[11px] leading-relaxed text-[#2C2B26]/90">
                Utilisation exclusive de produits de qualité cosmétique, hypoallergéniques et nettoyables simplement à l'eau.
              </p>
            </div>

            <div className="rounded-lg border border-[#1C1B18]/10 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">✨ Pour Tous Vos Événements</h4>
              <p className="text-[11px] leading-relaxed text-[#2C2B26]/90">
                Concept modulable : maquillages artistiques enfants, motifs néon/UV pour soirées, et body-art d'entreprise.
              </p>
            </div>
          </div>

          {/* Bouton d'action "Book Us" */}
          <div className="mt-8 pt-4 border-t border-[#1C1B18]/10">
            <button
              onClick={handleBookWhatsApp}
              className="w-full rounded-lg bg-[#25D366] py-4 text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase shadow-md transition-all hover:bg-[#20ba5a] hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>💬 Réserver / Demander un devis sur WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
