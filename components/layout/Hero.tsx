import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight, ChevronDown, Download, } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "CSS",
  "Django",
  "Redis",
  "PostgreSQL",
  "Rest API",
  "Docker",
  "Git",
  "Github Actions",
  "Vercel",
  "AWS",
  "Railway"
] 

const social = [
  {
    icon: Github,
    href: "#github",
    label: "Github"
  },
  {
    icon: Linkedin,
    href: "#linkedin",
    label: "Linkedin"
  },
  {
    icon: Twitter,
    href: "#twitter",
    label: "Twitter"
  }
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-bg.jpg"
          alt="Hero Image"
          fill
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {
          [...Array(30)].map((_,i)=>(
            <div key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20b2a6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${Math.random()})`,
                animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}ms`
              }}
            >
            </div>
          ))
        }
      </div>
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Software Engineer | Full Stack Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span><br/>
                experience with <br/>
                <span className="font-serif italic font-normal text-white">precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda facere ad debitis laboriosam magnam quae, iure velit in dolorem asperiores adipisci, eligendi
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedButton>
            </div>
            {/*Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {social.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/30 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl 
                  bg-gradient-to-br from-primary/30 via-transparent to-primary/30 
                  blur-2xl animate-pulse pointer-events-none"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image 
                  src="/profile.png"
                  alt="Abhishek Nagdeve"
                  width={2500}
                  height={2000}
                  className="w-full aspect-[5/4] object-cover rounded-2xl opacity-90"
                />
                {/*Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse">
                      <span className="text-sm font-medium">Availabe to work</span>
                    </div>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Skills Section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with:</p>
          <div className="relative overflow-hidden">
            <div className="flex w-max min-w-[200%] whitespace-nowrap animate-marquee">
              {
                [...skills, ...skills].map((skill: string , idx: number) => (
                  <div className="flex-shrink-0 px-8 py-4" key={idx}>
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <Link 
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wader">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </Link>
        

      </div>
    </section>
  )
}
