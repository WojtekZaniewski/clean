"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-shrink-0" aria-label="Navigation principale">
          <Link
            href="/"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            aria-label="Accueil"
          >
            Accueil
          </Link>
          <Link
            href="/nettoyage-classique.html"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            aria-label="Nettoyage classique"
          >
            Nettoyage classique
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-2 flex-shrink-0">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors touch-manipulation"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-1 pt-8" aria-label="Navigation principale">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="min-h-[48px] flex items-center px-4 rounded-lg text-base font-medium text-foreground hover:bg-secondary/50 transition-colors touch-manipulation"
                >
                  Accueil
                </Link>
                <Link
                  href="/nettoyage-classique.html"
                  onClick={() => setMenuOpen(false)}
                  className="min-h-[48px] flex items-center px-4 rounded-lg text-base font-medium text-foreground hover:bg-secondary/50 transition-colors touch-manipulation"
                >
                  Nettoyage classique
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="min-h-[48px] flex items-center px-4 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors touch-manipulation mt-2"
                >
                  Devis gratuit
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] min-w-[44px] touch-manipulation flex-shrink-0 whitespace-nowrap"
          aria-label="Demander un devis gratuit"
        >
          Devis gratuit
        </Link>
      </div>
    </header>
  )
}
