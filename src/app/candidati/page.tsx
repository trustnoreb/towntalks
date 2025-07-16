import Candidato from "../components/candidato";
import SearchBar from "../components/search_bar";
import css from "./candidati.module.css";
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
    name: "Chiara Rinaldi",
    icon: "",
    photo: "/images/candidati/chiara_rinaldi.png",
  },
  { name: "Paolo Blu", icon: "", photo: "/images/candidati/paolo_blu.png" },
  { name: "Carla Verdi", icon: "", photo: "/images/candidati/carla_verdi.png" },
];

function Candidati() {
  return (
    <>
      <h1 className={css.heading}>
        Scopri i <span className={css.purple}>candidati</span>
      </h1>
      <div>
        <div className={css.tool_bar}>
          <SearchBar />
          <div className={css.search_button}>Ordina</div>
        </div>
      </div>
      <h1 className={css.sub_heading}>Tutti i candidati</h1>
      <div className={css.cards_container}>
        {data.map((candidato, idx) => (
          <Candidato key={idx} data={candidato} />
        ))}
      </div>
    </>
  );
}

export default Candidati;
