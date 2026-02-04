"use client";

import Link from "next/link"
import Button from "../ui/Button"
import { Menu,X } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#about", lable: "About" },
  { href: "#projects", lable: "Projects" },
  { href: "#experience", lable: "Experience" },
  { href: "#testimonials", lable: "Testimonials" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    
    }

    window.addEventListener("scroll" , handleScroll)
    
    return () => window.removeEventListener("scroll",handleScroll)

  },[])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong p-3" : "bg-transpent p-5" } z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          AN<span className="text-primary">.</span>
        </a>
        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.lable}
              </Link>
            ))}
          </div>
        </div>
        {/*CTA Button*/}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/*Mobile Nav*/}
        <button 
          className="md:hidden p-2 text-foreground cursor-pointer" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {
            isMobileMenuOpen ? 
              <X size={24} /> :
              <Menu size={24} />
          }
        </button>
      </nav>
      {/*Mobile Nav*/}
      {isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in rounded-xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2">
                  {link.lable}
                </Link>
              ))}
              <Button >Contact Me</Button>

            </div>
          </div>
        )
      }

    </header>
  )
}
