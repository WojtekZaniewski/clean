import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 md:py-5 lg:py-6 flex items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex items-center min-h-[44px] touch-manipulation flex-shrink-0" aria-label="Retour à l'accueil">
          <Image
            src="/logo.png"
            alt="Société de nettoyage Liège"
            width={200}
            height={60}
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-shrink-0" aria-label="Navigation principale">
          <Link 
            href="#services" 
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            aria-label="Voir nos services"
          >
            Services
          </Link>
          <Link 
            href="#pourquoi-nous" 
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            aria-label="Pourquoi nous choisir"
          >
            Pourquoi nous
          </Link>
          <Link 
            href="#temoignages" 
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            aria-label="Lire les avis clients"
          >
            Avis clients
          </Link>
        </nav>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation flex-shrink-0 whitespace-nowrap"
          aria-label="Demander un devis gratuit"
        >
          <span className="hidden sm:inline">Devis gratuit</span>
          <span className="sm:hidden">Devis</span>
        </Link>
      </div>
    </header>
  )
}
