import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Image
                src="/logo.jpg"
                alt="Lena's Cleaning - Service de nettoyage professionnel"
                width={200}
                height={60}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              On nettoie à Liège et autour. Simplement.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-medium mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Nettoyage maison", "Nettoyage Airbnb", "Nettoyage hôtels", "Nettoyage bureaux"].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-base sm:text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors block min-h-[44px] flex items-center touch-manipulation"
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
            <h4 className="font-medium mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="tel:+32492955348" 
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation"
                  aria-label="Appeler Lena au +32 492 95 53 48"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>+32 492 95 53 48</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@lenas-cleaning.be" 
                  className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation break-all"
                  aria-label="Envoyer un email à contact@lenas-cleaning.be"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>contact@lenas-cleaning.be</span>
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Liège et alentours</span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="font-medium mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">Garanties</h4>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-muted-foreground">
              <li>Service local</li>
              <li>Satisfaction garantie</li>
              <li>Assurance complète</li>
              <li>Devis gratuit</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 sm:mt-12 md:mt-16 lg:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{"© 2025 Lena's Cleaning Services. Tous droits réservés."}</p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 md:mt-0">Service de nettoyage à Liège, Belgique</p>
        </div>
      </div>
    </footer>
  )
}
