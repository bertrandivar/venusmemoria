import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";

interface RequestProductModalProps {
  triggerText?: string;
  triggerVariant?: "default" | "outline" | "ghost" | "secondary";
}

export function RequestProductModal({
  triggerText = "Demander un produit sur-mesure",
  triggerVariant = "outline",
}: RequestProductModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    productName: "",
    brandOrLink: "",
    quantity: "1",
    contactInfo: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi vers votre API / Email / Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      productName: "",
      brandOrLink: "",
      quantity: "1",
      contactInfo: "",
      notes: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className="gap-2 border-gold/40 hover:border-gold">
          <Sparkles className="h-4 w-4 text-gold" />
          <span>{triggerText}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[485px] bg-background border-gold/20 shadow-xl">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-light text-foreground">
                Vous ne trouvez pas votre bonheur ?
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Dites-nous quel matériel vous recherchez. Notre équipe le dénichera auprès de nos fournisseurs spécialisés.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="productName" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Nom du produit / Matériel *
                </Label>
                <Input
                  id="productName"
                  required
                  placeholder="Ex: Pigment résine Bleu Outremer, Toile Lin 80x100..."
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="brandOrLink" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Marque ou Référence
                  </Label>
                  <Input
                    id="brandOrLink"
                    placeholder="Ex: Sennelier, Raphaël..."
                    value={formData.brandOrLink}
                    onChange={(e) => setFormData({ ...formData, brandOrLink: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="quantity" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Quantité
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contactInfo" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Votre WhatsApp ou Émail *
                </Label>
                <Input
                  id="contactInfo"
                  required
                  placeholder="Pour vous envoyer la disponibilité et le tarif"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Détails complémentaires (Optionnel)
                </Label>
                <Textarea
                  id="notes"
                  rows={2}
                  placeholder="Spécificités techniques, couleur exacte, délai souhaité..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground gap-2">
                  {loading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Envoyer la demande
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-gold mx-auto animate-bounce" />
            <h3 className="font-display text-2xl text-foreground">Demande bien reçue !</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Nous vérifions la disponibilité de votre matériel auprès de nos ateliers partenaires. Vous recevrez une réponse sous 24h à 48h.
            </p>
            <Button onClick={handleReset} variant="outline" className="mt-4">
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
