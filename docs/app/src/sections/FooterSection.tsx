import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Send, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FooterSectionProps {
  className?: string;
}

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#mission' },
  { label: 'Our Hatchery', href: '#values' },
  { label: 'Innovation & Research', href: '#innovation' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Gender Equality', href: '#partnerships' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'News', href: '#updates' },
  { label: 'Contact', href: '#footer' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Send, href: 'https://t.me', label: 'Telegram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export default function FooterSection({ className = '' }: FooterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contactRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        linksRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className={`relative bg-navy-light ${className}`}
    >
      {/* Main Footer Content */}
      <div className="px-6 lg:px-[7vw] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <h2
            className="font-heading font-bold text-white text-center mb-16"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Let's build the future of{' '}
            <span className="text-aqua">aquaculture</span> together.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div ref={contactRef} style={{ opacity: 0 }}>
              <h3 className="font-heading font-semibold text-white text-lg mb-6">
                Contact Us
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:neisatzaqua@gmail.com"
                  className="flex items-center gap-3 text-slate-blue hover:text-aqua transition-colors"
                >
                  <Mail className="w-5 h-5 text-aqua" />
                  neisatzaqua@gmail.com
                </a>

                <a
                  href="tel:+380675024730"
                  className="flex items-center gap-3 text-slate-blue hover:text-aqua transition-colors"
                >
                  <Phone className="w-5 h-5 text-aqua" />
                  +380 67 502 4730
                </a>

                <a
                  href="https://wa.me/380675024730"
                  className="flex items-center gap-3 text-slate-blue hover:text-aqua transition-colors"
                >
                  <svg className="w-5 h-5 text-aqua" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>

                <div className="flex items-start gap-3 text-slate-blue">
                  <MapPin className="w-5 h-5 text-aqua flex-shrink-0 mt-0.5" />
                  <span>Progresivka, Mykolaiv Region, Ukraine</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-blue hover:bg-aqua/20 hover:text-aqua transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div ref={linksRef} style={{ opacity: 0 }}>
              <h3 className="font-heading font-semibold text-white text-lg mb-6">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-blue hover:text-aqua transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 lg:px-[7vw] py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-blue text-sm">
            © 2026 Neusatz Aqua. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-blue text-sm">
              Part of{' '}
              <a
                href="https://vismar-aqua.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua hover:underline"
              >
                Vismar Aqua
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
