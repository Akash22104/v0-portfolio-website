import { ExternalLink, Clock, CheckCircle } from "lucide-react"

const projects = [
  {
    title: "Text-to-SQL: Natural Language Interface",
    status: "ongoing",
    description:
      "Developing an advanced NLP system to translate natural language into SQL queries using RAT-SQL for relation-aware schema encoding and T5 with PICARD constraints.",
    stack: ["Python", "PyTorch", "Transformers (T5)", "RAT-SQL"],
  },
  {
    title: "River Water Quality Prediction",
    status: "ongoing",
    description:
      "Developing a hybrid predictive model combining Machine Learning algorithms with Initial Value Problems (IVP) to forecast water quality indices.",
    stack: ["Python", "Scikit-learn", "Differential Equations"],
  },
  {
    title: "ML-Based Android Malware Detection",
    status: "submitted",
    description:
      'Co-authored a manuscript titled "ML-Based Android Malware Detection: Imbalance Reduction and Local Interpretable Model-Agnostic Explanations," submitted to Scientific Reports.',
    stack: ["Machine Learning", "LIME", "Class Imbalance"],
  },
  {
    title: "AI-Driven Meal Recommendation System",
    status: "completed",
    description:
      "Engineered a personalized nutrition platform with content-based filtering to recommend meals and integrated a real-time calorie tracking module.",
    stack: ["Python", "Web Frameworks", "Recommender Systems"],
  },
  {
    title: "RL Agent for Digital Burnout Mitigation",
    status: "completed",
    description:
      "Developed a Reinforcement Learning model to simulate and mitigate digital burnout by training agents to optimize work-rest schedules.",
    stack: ["Reinforcement Learning", "Python"],
  },
  {
    title: "Ransomware Detection via Static Analysis",
    status: "completed",
    description:
      "Built an intelligent detection system using statistical and ML techniques on hexadecimal header bytes for lightweight, real-time detection.",
    stack: ["Python", "Pandas", "XGBoost", "AdaBoost", "t-SNE"],
  },
  {
    title: "Cyberbullying Detection on Social Platforms",
    status: "ongoing",
    description:
      "Researching automated detection of cyberbullying using NLP transformers, analyzing patterns in toxic language to improve moderation systems.",
    stack: ["NLP", "Transformers", "Python"],
  },
]

const statusConfig = {
  ongoing: { label: "Ongoing", icon: Clock, className: "text-yellow-500 bg-yellow-500/10" },
  submitted: { label: "Submitted", icon: ExternalLink, className: "text-blue-500 bg-blue-500/10" },
  completed: { label: "Completed", icon: CheckCircle, className: "text-green-500 bg-green-500/10" },
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-wider text-primary font-mono">Projects & Research</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            const StatusIcon = status.icon
            return (
              <div
                key={project.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${status.className}`}>
                    <StatusIcon className="w-3 h-3" />
                    {status.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
