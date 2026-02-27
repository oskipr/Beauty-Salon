import { Instagram, Phone } from "lucide-react";
import thsLogo from "@/assets/ths-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={thsLogo}
              alt="The House Salon logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <h3 className="font-serif text-2xl mb-2">The House Salon</h3>
              <p className="text-background/60 font-sans font-light text-sm leading-relaxed">
                Hair salon moderno enfocado en estilo, precisión y experiencia.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase mb-4 text-background/80">
              Contacto
            </h4>
            <div className="space-y-2 text-background/60 font-sans font-light text-sm">
              <p>Calle Fortaleza 104</p>
              <p>Viejo San Juan, San Juan, PR 00901</p>
              <a
                href="tel:+17874778118"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 787 477 8118
              </a>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase mb-4 text-background/80">
              Horario
            </h4>
            <div className="text-background/60 font-sans font-light text-sm mb-6">
              <p>Lun - Vie: 10:00 - 20:00</p>
              <p>Sábados: 10:00 - 18:00</p>
            </div>
            <a
              href="https://instagram.com/thehousesalonbydely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @thehousesalonbydely
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-background/40 font-sans text-xs tracking-wide">
            © {new Date().getFullYear()} The House Salon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
