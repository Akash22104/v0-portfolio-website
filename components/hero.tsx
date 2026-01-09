import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wider">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">Akash S</h1>
            <p className="text-xl md:text-2xl text-primary font-medium">Data Science Student</p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Motivated Data Science student currently in the 8th semester of a 5-year Integrated M.Sc at Amrita Vishwa
            Vidyapeetham. Specialized in <span className="text-foreground font-medium">machine learning</span>,{" "}
            <span className="text-foreground font-medium">data visualization</span>, and{" "}
            <span className="text-foreground font-medium">statistical analysis</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:akash23112004@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/akash-s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Coimbatore, Tamil Nadu
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +91 6385676620
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
              <div className="text-8xl font-bold text-primary/50">AS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
