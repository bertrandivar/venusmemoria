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
                  href="https://www.facebook.com/people/Venusmemoria/61593031996712/?rdid=5gnl2Wg9gRQeEmZZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XjkSfwsZU%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <span>|</span>
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
              <dd className="mt-1 text-foreground">contact@venusmemoria.art</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="card-lux space-y-7 p-8 md:p-12">
          <div className="grid gap-7 sm:grid-cols-2">
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
          <div className="grid gap-7 sm:grid-cols-2">
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
            className="w-full bg-primary px-8 py-4 text-[0.65rem] tracking-[0.3em] text-primary-foreground uppercase transition-colors hover:bg-gold hover:text-foreground disabled:opacity-50"
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
