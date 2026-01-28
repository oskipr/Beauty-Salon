import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Palette, Sparkles, Droplets } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cortes",
    description: "Cortes personalizados que realzan tu estilo y estructura facial",
  },
  {
    icon: Palette,
    title: "Color",
    description: "Técnicas de coloración modernas con productos de primera calidad",
  },
  {
    icon: Sparkles,
    title: "Styling",
    description: "Peinados para eventos especiales y ocasiones únicas",
  },
  {
    icon: Droplets,
    title: "Tratamientos",
    description: "Cuidado profundo para restaurar la salud de tu cabello",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-salon-taupe mb-4 block">
            Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Lo que ofrecemos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-8 bg-background rounded-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-salon-beige transition-colors duration-300">
                <service.icon className="w-7 h-7 text-foreground/80" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
