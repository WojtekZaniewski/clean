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

        <div className="flex-shrink-0" />
      </div>
    </header>
  )
}
