import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-5 md:py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center min-h-[44px] touch-manipulation" aria-label="Retour à l'accueil">
          <Image
            src="/logo.png"
            alt="Lena's Cleaning - Service de nettoyage professionnel"
            width={200}
            height={60}
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            href="#services" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Voir nos services"
          >
            Services
          </Link>
          <Link 
            href="#pourquoi-nous" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Pourquoi nous choisir"
          >
            Pourquoi nous
          </Link>
          <Link 
            href="#temoignages" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            aria-label="Lire les avis clients"
          >
            Avis clients
          </Link>
        </nav>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-label="Demander un devis gratuit"
        >
          <span className="hidden sm:inline">Devis gratuit</span>
          <span className="sm:hidden">Devis</span>
        </Link>
      </div>
    </header>
  )
}
