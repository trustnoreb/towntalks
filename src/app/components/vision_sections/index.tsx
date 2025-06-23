"use client";
import { useRef } from "react";
import css from "./vision_sections.module.css";
import { motion, useInView } from "framer-motion";
import Section from "../section/section";

const sectionInfo = [
  {
    question: "Perchè è nata la piattaforma?",
    descr:
      "TownTalks nasce da un progetto di tesi e dall’esigenza di combattere l’astensionismo informativo nell’epoca attuale. Tramite i meccanismi semplici ed efficienti del sito web, tutti gli utenti hanno l’occasione di informarsi al meglio per le elezioni comunali e prendere una decisione consapevolmente.",
    imageName: "iconSectionHomepage1.png",
  },
  {
    question: "Il problema dell’astensionismo?",
    descr:
      "A causa dell’astensionismo, la democrazia sta subendo sempre più attacchi che rischiano di minarne le fondamenta. In Italia, negli ultimi decenni, questo fenomeno sta  aumentando in maniera esponenziale.",
    imageName: "iconSectionHomepage2.png",
  },
];

function VisionSections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={css.sections_container}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {sectionInfo.map((section, idx) => (
        <Section key={idx} index={idx} data={section} />
      ))}
    </motion.div>
  );
}
export default VisionSections;
