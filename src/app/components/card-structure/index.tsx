"use client";
import { motion, useInView } from "framer-motion";
import css from "./card_structure.module.css";
import Image from "next/image";
import { useRef } from "react";
const data = [
  {
    title: "I candidati",
    icon: (
      <Image
        src="/images/candidati_photo.png"
        width={200}
        height={200}
        alt="Candidati"
      />
    ),
    descr:
      "Nella presente sezione troverai informazioni sui candidati alle elezioni",
  },
  {
    title: "Le tematiche",
    icon: (
      <Image
        src="/images/tematiche_photo.png"
        width={200}
        height={200}
        alt="Tematiche"
      />
    ),
    descr:
      "In questa parte potrai esaminare le tematiche del dibattito politico",
  },
  {
    title: "Il confronto",
    icon: (
      <Image
        src="/images/confronto_photo.png"
        width={200}
        height={200}
        alt="Confronto"
      />
    ),
    descr: "Per prendere una decisione consapevole, confronta i candidati",
  },
];

function CardStructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={css.structure_heading}>
        Com&apos;è<span className={css.town}>&nbsp;strutturata&nbsp;</span> la
        piattaforma?
      </h1>
      <div className={css.card_container}>
        {data.map((card, idx) => (
          <div key={idx} className={css.card}>
            <h2 className={css.card_text}>{card.title}</h2>
            <span className={css.card_icon}>{card.icon}</span>
            <p className={css.card_text}>{card.descr}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default CardStructure;
