import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Portrait sur toile",
  "Résine Art",
  "Face Painting",
  "Ateliers d'Art",
];

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || "Non renseigné",
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_9zijue7",
        "template_8ku3p4j",
        templateParams,
        "0i5_D3MDwthapN0bI"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Erreur d'envoi EmailJS :", err);
        setLoading(false);
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      });
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Demander un devis <span className="italic text-gilded">sur-mesure</span>
          </h2>
          <div className="rule-gold my-6 w-20 md:my-8 md:w-24" />
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Chaque création débute par une conversation. Partagez-nous votre souvenir,
            nous lui donnerons une forme éternelle.
          </p>
          <dl className="mt-8 space-y-6 text-xs sm:text-sm md:mt-10">
            <div>
              <dt className="eyebrow">Atelier</dt>
              <dd className="mt-1 text-foreground">Bujumbura, Burundi — sur rendez-vous</dd>
            </div>
            <div>
              <dt className="eyebrow">Suivez-nous</dt>
              <dd className="mt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-light text-gold uppercase tracking-wider sm:gap-4 sm:text-xs">
                <a
                  href="https://www.instagram.com/venusmemoria?igsh=bHZqcTRwaG9hM251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <span className="opacity-50">|</span>
                <a
                  href="https://www.facebook.com/people/Venusmemoria/61593031996712/?rdid=5gnl2Wg9gRQeEmZZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XjkSfwsZU%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <span className="opacity-50">|</span>
                <a
                  href="https://tiktok.com"
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
              <dd className="mt-1 text-foreground break-all">contact@venusmemoria.art</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="card-lux space-y-5 p-6 sm:space-y-7 md:p-12">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
            <input
              required
              placeholder="Nom complet"
              className={field}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className={field}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
            <input
              placeholder="Téléphone"
              className={field}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <select
              required
              className={field}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="" disabled>
                Service souhaité
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <textarea
            required
            rows={4}
            placeholder="Décrivez votre projet"
            className={field}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary px-6 py-4 text-[0.65rem] tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:bg-gold hover:text-foreground disabled:opacity-50 sm:px-8 sm:tracking-[0.3em]"
          >
            {loading
              ? "Envoi en cours..."
              : sent
              ? "Demande envoyée — merci"
              : "Envoyer ma demande"}
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
