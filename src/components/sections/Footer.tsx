import { Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Financial Planning", path: "/financial-planning" },
  { name: "Our Expertise", path: "/our-expertise" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact Us", path: "/contact-us" }
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0B5DD0]">
      {/* Main Footer Content */}
      <div className="w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">NCR Consulting</h2>
              <p className="font-roboto text-[15px] text-blue-100/90 leading-relaxed">
                NCR Consulting is a leading chartered accountancy firm, providing comprehensive financial services, tax advisory, and business consulting solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-5">
              <h3 className="font-playfair text-xl font-semibold text-white mb-8">Quick Links</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center text-blue-100/90 hover:text-white transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="font-roboto text-[15px]">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact and Social */}
            <div className="md:col-span-3">
              <h3 className="font-playfair text-xl font-semibold text-white mb-8">Connect With Us</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="font-roboto text-[15px] text-blue-100/90">
                    123, Business District<br />
                    Sector 62, Noida<br />
                    Uttar Pradesh - 201301
                  </p>
                  <p className="font-roboto text-[15px] text-blue-100/90">
                    Office: +91-120-4567890<br />
                    Mobile: +91-98765-43210
                  </p>
                  <p className="font-roboto text-[15px] text-blue-100/90">
                    Email: info@ncrconsulting.in
                  </p>
                </div>
                <div className="flex space-x-4">
                  <SocialLink href="https://facebook.com" icon={Facebook} />
                  <SocialLink href="https://twitter.com" icon={Twitter} />
                  <SocialLink href="https://linkedin.com" icon={Linkedin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="font-roboto text-[14px] text-blue-100/80">
                © 2024 NCR Consulting. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start md:justify-end gap-8">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Disclaimer", path: "/disclaimer" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="font-roboto text-[14px] text-blue-100/80 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 flex items-center justify-center transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 text-white" />
      <span className="sr-only">Social Link</span>
    </a>
  );
}