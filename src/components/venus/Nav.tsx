const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Collections", href: "#collections" },
  { label: "Galerie", href: "#galerie" },
  { label: "Boutique", href: "#boutique" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  onLogoClick: () => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export function Nav({ onLogoClick, cartCount = 0, onOpenCart }: NavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="text-left font-display text-lg tracking-[0.25em] text-foreground uppercase transition-opacity hover:opacity-70"
        >
          Venus
          <span className="block font-body text-[0.55rem] tracking-[0.4em] text-muted-foreground">
            The Creation Aura
          </span>
        </button>

        {/* Liens de navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold ${
                  l.href === "#boutique"
                    ? "text-gold font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions : Bouton Panier + Commander une œuvre */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative border border-gold/60 bg-gold/10 px-4 py-2.5 text-[0.65rem] tracking-[0.2em] text-gold uppercase transition-all hover:bg-gold hover:text-black"
            aria-label="Ouvrir le panier"
          >
            Panier
            {cartCount > 0 && (
              <span className="ml-2 rounded-full bg-gold text-black font-bold px-1.5 py-0.5 text-[10px]">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-block border border-gold px-5 py-3 text-[0.65rem] tracking-[0.25em] text-foreground uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Commander une œuvre
          </a>
        </div>
      </nav>
    </header>
  );
}
