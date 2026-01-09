import { GraduationCap, Calendar, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-wider text-primary font-mono">About</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Passionate about turning data into insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated Data Science student with demonstrated strong academic momentum (CGPA: 7.3). My expertise
              spans machine learning, data visualization, and statistical analysis, with hands-on experience in Python,
              TensorFlow, and scikit-learn.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm seeking a role that offers a clear career path by allowing me to leverage my programming skills and
              technical knowledge. Beyond academics, I represented Amrita Vishwa Vidyapeetham in the All India Best
              Physique Championship (2025).
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Integrated M.Sc in Data Science</h4>
                  <p className="text-primary text-sm">Amrita Vishwa Vidyapeetham</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      09/2022 – 05/2027
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      CGPA: 7.3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
