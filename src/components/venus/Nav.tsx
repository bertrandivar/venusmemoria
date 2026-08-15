const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Collections", href: "#collections" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ onLogoClick }: { onLogoClick: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <button
          onClick={onLogoClick}
          className="text-left font-display text-lg tracking-[0.25em] text-foreground uppercase transition-opacity hover:opacity-70"
        >
          Venus
          <span className="block font-body text-[0.55rem] tracking-[0.4em] text-muted-foreground">
            The Creation Aura
          </span>
        </button>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] text-foreground/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="border border-gold px-5 py-3 text-[0.65rem] tracking-[0.25em] text-foreground uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Commander une œuvre
        </a>
      </nav>
    </header>
  );
}
