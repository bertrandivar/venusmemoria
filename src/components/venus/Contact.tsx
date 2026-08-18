import { useState, type FormEvent } from "react";

const services = [
  "Portrait sur toile",
  "Résine Art",
  "Face Painting",
  "Ateliers d'Art",
];

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Demander un devis <span className="italic text-gilded">sur-mesure</span>
          </h2>
          <div className="rule-gold my-8 w-24" />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Chaque création débute par une conversation. Partagez-nous votre souvenir,
            nous lui donnerons une forme éternelle.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">Atelier</dt>
              <dd className="mt-1 text-foreground">Bujumbura, Burundi — sur rendez-vous</dd>
            </div>
            <div>
              <dt className="eyebrow">Suivez-nous</dt>
              <dd className="mt-2 flex flex-wrap gap-4 text-xs font-light text-gold uppercase tracking-wider">
                <a
                  href="https://www.instagram.com/venusmemoria?igsh=bHZqcTRwaG9hM251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram (@venusmemoria)
                </a>
                <span>|</span>
                <a
                  href="https://facebook.com/profile.php?id=61593031996712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <span>|</span>
                <a
                  href="https://tiktok.com" /* Coller votre lien TikTok ici */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1 text-foreground">contact@venus-creationaura.com</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="card-lux space-y-7 p-8 md:p-12">
          <div className="grid gap-7 sm:grid-cols-2">
            <input required placeholder="Nom complet" className={field} />
            <input required type="email" placeholder="Email" className={field} />
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <input placeholder="Téléphone" className={field} />
            <select required defaultValue="" className={field}>
              <option value="" disabled>
                Service souhaité
              </option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <textarea rows={4} placeholder="Décrivez votre projet" className={field} />
          <button
            type="submit"
            className="w-full bg-primary px-8 py-4 text-[0.65rem] tracking-[0.3em] text-primary-foreground uppercase transition-colors hover:bg-gold hover:text-foreground"
          >
            {sent ? "Demande envoyée — merci" : "Envoyer ma demande"}
          </button>
          {sent && (
            <p className="text-center text-xs text-muted-foreground">
              Nous vous répondons sous 48 heures.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
