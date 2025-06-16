import Navbar from "./components/navbar/navbar";
import HomeContent from "./components/home_content";
import HomeCards from "./components/home_cards";
import Section from "./components/section";

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
export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <HomeCards />
      {sectionInfo.map((section, idx) => (
        <Section key={idx} data={section} />
      ))}
    </>
  );
}
