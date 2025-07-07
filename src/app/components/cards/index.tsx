import Card from "../card";
import css from "./cards.module.css";

const data = [
  { name: "Mario Rossi", icon: "", photo: "/images/candidati/mario_rossi.png" },
  {
    name: "Elena Moretti",
    icon: "",
    photo: "/images/candidati/eleonora_moretti.png",
  },
  {
    name: "Luca Bianchi",
    icon: "",
    photo: "/images/candidati/luca_bianchi.png",
  },
  {
    name: "Chiara rinaldi",
    icon: "",
    photo: "/images/candidati/chiara_rinaldi.png",
  },
  { name: "Paolo Blu", icon: "", photo: "/images/candidati/paolo_blu.png" },
  { name: "Carla Verdi", icon: "", photo: "/images/candidati/carla_verdi.png" },
];
function Cards() {
  return (
    <div className={css.cards_container}>
      {data.map((candidato, idx) => (
        <Card key={idx} data={candidato} />
      ))}
    </div>
  );
}

export default Cards;
