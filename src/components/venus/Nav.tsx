import { useState } from "react";

const mainLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Collections", href: "#collections" },
  { label: "Galerie", href: "#galerie" },
];

const secondaryLinks = [
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  onLogoClick: () => void;
  onOpenShop?: () => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export function Nav({ onLogoClick, onOpenShop, cartCount = 0, onOpenCart }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="text-left font-display text-lg tracking-[0.25em] text-foreground uppercase transition-opacity hover:opacity-70"
        >
          Venus
          <span className="block font-body text-[0.5rem] tracking-[0.4em] text-muted-foreground">
            The Creation Aura
          </span>
        </button>

        {/* Liens de navigation essentiels (Desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {mainLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] text-foreground/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Bouton Boutique déclenchant l'ouverture du second univers */}
          <li>
            <button
              onClick={onOpenShop}
              className="text-xs tracking-[0.2em] font-semibold text-gold uppercase transition-colors hover:text-foreground"
            >
              Boutique
            </button>
          </li>

          {/* Sous-liens pour les pages secondaires */}
          {secondaryLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions à droite : Icône/Badge Panier + CTA principal + Bouton Mobile */}
        <div className="flex items-center gap-5">
          {/* Bouton Panier */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2 text-foreground transition-colors hover:text-gold"
            aria-label="Ouvrir le panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Bouton CTA unique */}
          <a
            href="#contact"
            className="hidden sm:inline-block border border-gold px-5 py-2.5 text-[0.65rem] tracking-[0.25em] text-foreground uppercase transition-all hover:bg-gold hover:text-black"
          >
            Commander
          </a>

          {/* Bouton Menu Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile déroulant */}
      {mobileMenuOpen && (
        <div className="border-b border-border/60 bg-background px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {mainLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-foreground uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShop?.();
                }}
                className="text-sm tracking-[0.2em] font-bold text-gold uppercase"
              >
                Boutique
              </button>
            </li>
            {secondaryLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-muted-foreground uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
