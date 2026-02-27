import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agendar" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-salon-taupe mb-4 block">
            Reserva
          </span>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Agenda tu cita
            <br />
            <span className="italic">en pocos pasos</span>
          </h2>

          <p className="text-lg text-muted-foreground font-sans font-light mb-10">
            Reserva tu próxima visita de forma rápida y sencilla. 
            Estamos listos para atenderte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-sans text-sm tracking-wide px-10 py-6"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 font-sans text-sm tracking-wide px-10 py-6"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Escríbenos por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
