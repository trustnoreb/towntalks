import Card from "../card";
import css from "./cards.module.css";

const data = [
  { name: "Sara", icon: "", photo: "" },
  { name: "Marco", icon: "", photo: "" },
  { name: "Carla", icon: "", photo: "" },
  { name: "Ettore", icon: "", photo: "" },
  { name: "Antonella", icon: "", photo: "" },
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
