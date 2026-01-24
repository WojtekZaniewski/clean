import { Sparkles, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg">{"Lena's Cleaning"}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On nettoie à Liège et autour. Simplement.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {["Nettoyage maison", "Nettoyage Airbnb", "Nettoyage hôtels", "Nettoyage bureaux"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+32 492 95 53 48</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@lenas-cleaning.be</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Liège et alentours</span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-medium mb-4">Garanties</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Service local</li>
              <li>Satisfaction garantie</li>
              <li>Assurance complète</li>
              <li>Devis gratuit</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">{"© 2025 Lena's Cleaning Services. Tous droits réservés."}</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Service de nettoyage à Liège, Belgique</p>
        </div>
      </div>
    </footer>
  )
}
