import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-salon-taupe mb-4 block">
            Ubicación
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Encuéntranos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-secondary"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.389755!2d-66.1077!3d18.466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f6a8b63d0a1%3A0x9e0e8b3c3d4e5f6a!2sOld%20San%20Juan%2C%20San%20Juan%2C%2000901%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de The House Salon"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Dirección</h3>
                <p className="text-muted-foreground font-sans font-light">
                  Calle Fortaleza 104
                  <br />
                  Viejo San Juan, San Juan, PR 00901
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Horario</h3>
                <p className="text-muted-foreground font-sans font-light">
                  Lunes a Viernes: 10:00 - 20:00
                  <br />
                  Sábados: 10:00 - 18:00
                  <br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 font-sans text-sm tracking-wide"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Cómo llegar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
