import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center min-h-[44px] touch-manipulation" aria-label="Retour à l'accueil">
          <Image
            src="/logo.png"
            alt="Lena's Cleaning - Service de nettoyage professionnel"
            width={200}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            href="#services" 
            className="text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Voir nos services"
          >
            Services
          </Link>
          <Link 
            href="#pourquoi-nous" 
            className="text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Pourquoi nous choisir"
          >
            Pourquoi nous
          </Link>
          <Link 
            href="#temoignages" 
            className="text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Lire les avis clients"
          >
            Avis clients
          </Link>
        </nav>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-medium hover:bg-primary/90 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-label="Demander un devis gratuit"
        >
          <span className="hidden sm:inline">Devis gratuit</span>
          <span className="sm:hidden">Devis</span>
        </Link>
      </div>
    </header>
  )
}
