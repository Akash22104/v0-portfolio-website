import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-wider text-primary font-mono">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for opportunities to leverage my programming skills and technical knowledge. If you
              have a project or role that aligns with my skills, I'd love to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:akash23112004@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">akash23112004@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916385676620"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">+91 6385676620</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/akash-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">linkedin.com/in/akash-s</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-card rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-6">Personal Details</h4>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Date of Birth</span>
                <span className="text-foreground">23rd November, 2004</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-foreground">Tamil (Native), English (Proficient)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Interests</span>
                <span className="text-foreground text-right">Visualizing public datasets, Upskilling</span>
              </div>
              <div className="py-3">
                <span className="text-muted-foreground block mb-2">Address</span>
                <span className="text-foreground text-sm">11-102 A, Marthandam, Kanyakumari, Tamil Nadu - 629172</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Akash S. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
