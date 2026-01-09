const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "C++"],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Statsmodels", "XGBoost", "AdaBoost"],
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Excel"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Cleaning", "Feature Engineering", "Predictive Modeling", "Statistical Analysis"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-wider text-primary font-mono">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
