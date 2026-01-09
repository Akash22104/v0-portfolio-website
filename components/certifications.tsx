import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    description: "Gained expertise in data preprocessing, visualization, and statistical analysis.",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM via Coursera",
    description: "Developed ML models using scikit-learn, applying regression and clustering to real datasets.",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM via Coursera",
    description: "Comprehensive Python programming for data science and AI applications.",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    description: "Understanding of generative AI concepts and applications.",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-wider text-primary font-mono">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-sm mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
