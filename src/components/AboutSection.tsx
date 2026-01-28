import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-salon-taupe mb-4 block">
            Sobre Nosotros
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">
            Donde el estilo
            <br />
            <span className="italic">encuentra su forma</span>
          </h2>

          <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed mb-6">
            En Kosmo Salon creemos que cada cliente es único. Nuestro equipo de 
            estilistas expertos combina técnica impecable con atención personalizada, 
            creando experiencias que van más allá de un simple corte de cabello.
          </p>

          <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
            Nos enfocamos en entender tu estilo y necesidades para ofrecerte 
            resultados que reflejen tu mejor versión.
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-24 h-px bg-salon-taupe mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default AboutSection;
