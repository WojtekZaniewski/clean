import { Phone, Mail, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-8 sm:py-12 md:py-16 lg:py-20 border-t border-border w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Image
                src="/logo.png"
                alt="Lena's Cleaning - Service de nettoyage professionnel"
                width={200}
                height={60}
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-none"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
              On nettoie à Liège et autour. Simplement.
            </p>
            <address className="not-italic text-xs sm:text-sm md:text-base text-muted-foreground mt-2 sm:mt-3 break-words">
              Lena's Cleaning Services<br />
              Liège et alentours, Belgique<br />
              <a href="tel:+32492955348" className="hover:text-foreground transition-colors">+32 492 95 53 48</a><br />
              <a href="mailto:cleaningserviceslena@gmail.com" className="hover:text-foreground transition-colors">cleaningserviceslena@gmail.com</a>
            </address>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="font-medium mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Nettoyage maison", "Nettoyage Airbnb", "Nettoyage hôtels", "Nettoyage bureaux"].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors block min-h-[44px] flex items-center touch-manipulation break-words"
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
            <h3 className="font-medium mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="tel:+32492955348" 
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation break-all"
                  aria-label="Appeler Lena au +32 492 95 53 48"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>+32 492 95 53 48</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:cleaningserviceslena@gmail.com" 
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation break-all"
                  aria-label="Envoyer un email à cleaningserviceslena@gmail.com"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>cleaningserviceslena@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="break-words">Liège et alentours</span>
              </li>
              <li>
                <a
                  href="https://share.google/rTvk1nhSy6ngSpjn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors min-h-[44px] touch-manipulation break-words"
                  aria-label="Notez-nous sur Google"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Notez-nous sur Google</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="font-medium mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">Garanties</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
              <li className="break-words">Service local</li>
              <li className="break-words">Satisfaction garantie</li>
              <li className="break-words">Assurance complète</li>
              <li className="break-words">Devis gratuit</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 sm:mt-8 md:mt-12 lg:mt-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-border text-center md:text-left gap-2">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">{"© 2025 Lena's Cleaning Services. Tous droits réservés."}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4">
            <a
              href="https://share.google/rTvk1nhSy6ngSpjn8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 break-words"
              aria-label="Notez-nous sur Google"
            >
              Notez-nous sur Google
            </a>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">Service de nettoyage à Liège, Belgique</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
