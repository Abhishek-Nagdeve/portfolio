import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import { AnimatedButton } from "../ui/AnimatedButton"

const projects = [
  {
    title: "HR System",
    description: "Built an internal HR platform to digitize core HR operations including leave application workflows, approval hierarchies, attendance-based salary calculation, and payroll preparation. The system provides role-based access for employees, managers, and HR administrators, enabling transparent leave tracking and reliable salary computation. This solution significantly reduced manual HR effort and improved payroll accuracy.",
    image: "/projects/proj1.jpg",
    tags: ["React","Django","MongoDB"],
    link: "https://site.google.com/bellitesprings.com/bellitehomepage/home"
  },
  {
    title: "Architect Portfolio website",
    description:"Architect Portfolio Website — A modern, responsive website designed to showcase architectural projects, design philosophy, and professional experience with a clean layout and smooth user experience.",
    image:"/projects/proj2.png",
    tags:["React","Next.js","Tailwind CSS"],
    link:"https://archproj3-git-main-abhishek-nagdeves-projects.vercel.app/"
  }
]


export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* BG Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in text-secondary-foreground">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that 
              <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eos autem quod asperiores, commodi consequuntur quidem praesentium corrupti tempora laudantium veniam repellat corporis esse, nulla velit voluptas. Inventore, perferendis sapiente.
            </p>
          </div>
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {
              projects.map(( project , idx ) => (
                <div 
                  key={idx}
                  className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                  style={{animationDelay:`${(idx+1) * 100}ms`}}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover transition-transform duration 700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transperant opecity-60"/>
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.link} 
                        target="blank"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5"/>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary">{project.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(( tag , tagIdx ) => (
                        <span className="px-2 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" key={tagIdx}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* View All CTA */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedButton >
              View All Projects
              <ArrowUpRightIcon className="w-5 h-5"/>
            </AnimatedButton>
          </div>
        </div>

      </div>
    </section>
  )
}
