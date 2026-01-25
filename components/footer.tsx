import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-10 sm:py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Image
                src="/logo.jpg"
                alt="Lena's Cleaning - Service de nettoyage professionnel"
                width={150}
                height={44}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              On nettoie à Liège et autour. Simplement.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Nettoyage maison", "Nettoyage Airbnb", "Nettoyage hôtels", "Nettoyage bureaux"].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors block min-h-[44px] flex items-center touch-manipulation"
                    aria-label={`Voir ${service}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="tel:+32492955348" 
                  className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation"
                  aria-label="Appeler Lena au +32 492 95 53 48"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>+32 492 95 53 48</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@lenas-cleaning.be" 
                  className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation break-all"
                  aria-label="Envoyer un email à contact@lenas-cleaning.be"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>contact@lenas-cleaning.be</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Liège et alentours</span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">Garanties</h4>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-muted-foreground">
              <li>Service local</li>
              <li>Satisfaction garantie</li>
              <li>Assurance complète</li>
              <li>Devis gratuit</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center md:text-left">
          <p className="text-sm sm:text-base text-muted-foreground">{"© 2025 Lena's Cleaning Services. Tous droits réservés."}</p>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 md:mt-0">Service de nettoyage à Liège, Belgique</p>
        </div>
      </div>
    </footer>
  )
}
