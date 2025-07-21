import { useState } from "react";
import Card from "../card";
import SearchBar from "../search_bar";
import css from "./tematiche.module.css";
import CompostIcon from "@mui/icons-material/Compost";
import CommuteIcon from "@mui/icons-material/Commute";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import SecurityIcon from "@mui/icons-material/Security";

const data = [
  {
    name: "Ambiente",
    icon: <CompostIcon sx={{ color: "green" }} />,
    photo: "/images/tematiche/ambiente.png",
  },
  {
    name: "Mobilità e viabilità",
    icon: <CommuteIcon sx={{ color: "purple" }} />,
    photo: "/images/tematiche/viabilità.png",
  },
  {
    name: "Finanza municipale",
    icon: <AssuredWorkloadIcon sx={{ color: "yellow" }} />,
    photo: "/images/tematiche/finanza.png",
  },
  {
    name: "Iniziative sociali",
    icon: <CelebrationIcon sx={{ color: "red" }} />,
    photo: "/images/tematiche/iniziative.png",
  },
  {
    name: "Servizi sociali e sanitari",
    icon: <AssistWalkerIcon sx={{ color: "orange" }} />,
    photo: "/images/tematiche/servizi.png",
  },
  {
    name: "Sicurezza",
    icon: <SecurityIcon sx={{ color: "blue" }} />,
    photo: "/images/tematiche/sicurezza.png",
  },
];

function Tematiche() {
  const [filterName, setFilterName] = useState("");
  const filteredData = data.filter((candidato) =>
    candidato.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  );

  return (
    <>
      <h1 className={css.heading}>
        Scopri le <span className={css.purple}>tematiche</span>
      </h1>
      <div>
        <div className={css.tool_bar}>
          <SearchBar setFilter={setFilterName} />
          <div className={css.search_button}>Ordina</div>
        </div>
      </div>
      <h1 className={css.sub_heading}>Tutti i candidati</h1>
      <div className={css.cards_container}>
        {filteredData.map((candidato, idx) => (
          <Card key={idx} name={candidato.name} photo={candidato.photo} />
        ))}
      </div>
    </>
  );
}

export default Tematiche;
