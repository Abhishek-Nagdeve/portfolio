import {
  Code2,
  Layers,
  Gauge,
  ShieldCheck,
  Cloud,
  Database,
  Workflow,
  Users
} from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Write maintainable, readable, and scalable code that stands the test of time."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Design modular, multi-tenant, and extensible systems built to grow with the product."
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description: "Optimize load times, API responses, and database queries for fast user experiences."
  },
  {
    icon: Database,
    title: "Data-Driven Systems",
    description: "Design efficient schemas, handle migrations, and ensure data consistency at scale."
  },
  {
    icon: Workflow,
    title: "API & Integrations",
    description: "Build robust REST APIs and integrate third-party services reliably."
  },
  {
    icon: Users,
    title: "User-Centric Development",
    description: "Translate business needs into intuitive, accessible, and polished user interfaces."
  }
]



export default function About() {

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leadning-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the Future,
              <span className="font-serif italic font-normal text-white"> One component at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a full-stack web developer with a strong focus on building scalable, maintainable, and performance-driven applications. I work primarily with modern frontend frameworks and backend systems, designing component-based architectures that emphasize code reuse, clarity, and long-term stability.
              </p>
              <p>
                On the frontend, I focus on clean UI architecture, state management, accessibility, and performance optimization. I enjoy working with design systems, reusable components, and well-structured layouts that translate product requirements into intuitive user experiences. On the backend, I design APIs, data models, and system flows that are efficient, secure, and easy to evolve as products grow.
              </p>
              <p>
              I care deeply about software architecture, clean code practices, and system design. I’m comfortable working across the full stack — from database schemas and API contracts to frontend interactions and deployment pipelines. I enjoy breaking down complex problems, making thoughtful technical decisions, and building systems that perform reliably in real-world scenarios.
              </p>
            </div>
            <div className="glass rounded-2xl glow-border p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tenetur amet saepe expedita totam praesentium dolores et adipisci, officia iusto similique sit rerum quibusdam ad magnam a nulla magni ipsum!
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {
              highlights.map((item , idx)=>(
                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1)  * 100}ms`}}>
                  <div className="w-12 h-12 p-1 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/30 transition-all delay-100">
                    <item.icon className="w-6 h-6 text-primary hover:text-white"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
