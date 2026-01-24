import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-serif text-lg tracking-tight">{"Lena's Cleaning"}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#pourquoi-nous" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pourquoi nous
          </Link>
          <Link href="#temoignages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Avis clients
          </Link>
        </nav>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Devis gratuit
        </Link>
      </div>
    </header>
  )
}
