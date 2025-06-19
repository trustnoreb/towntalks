import SectionBase from "../section-base/section-base";
import css from "./sections.module.css";

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

function Sections() {
  return (
    <div className={css.sections_container}>
      {sectionInfo.map((section, idx) => (
        <SectionBase key={idx} index={idx} data={section} />
      ))}
    </div>
  );
}
export default Sections;
