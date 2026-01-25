import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-h-[44px] touch-manipulation" aria-label="Retour à l'accueil">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" aria-hidden="true" />
          </div>
          <span className="font-serif text-base sm:text-lg tracking-tight">{"Lena's Cleaning"}</span>
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
