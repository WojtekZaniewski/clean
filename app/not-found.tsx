import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-2">
          Page introuvable
        </h1>
        <p className="text-muted-foreground max-w-md mb-8">
          Cette page n'existe pas ou a été déplacée. Retournez à l'accueil ou découvrez nos services.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 min-h-[48px]"
          >
            Accueil
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center border-2 border-border px-6 py-3 rounded-full font-medium hover:bg-secondary min-h-[48px]"
          >
            Nos services
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center border-2 border-border px-6 py-3 rounded-full font-medium hover:bg-secondary min-h-[48px]"
          >
            Contact / Devis gratuit
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
