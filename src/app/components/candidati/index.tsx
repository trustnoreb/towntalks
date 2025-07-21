"use client";
import { useState } from "react";
import Candidato from "../candidato";
import SearchBar from "../search_bar";
import css from "./candidati.module.css";
import Card from "../card";
const data = [
  { name: "Mario Rossi", photo: "/images/candidati/mario_rossi.png" },
  {
    name: "Elena Moretti",
    photo: "/images/candidati/eleonora_moretti.png",
  },
  {
    name: "Luca Bianchi",
    photo: "/images/candidati/luca_bianchi.png",
  },
  {
    name: "Chiara Rinaldi",
    photo: "/images/candidati/chiara_rinaldi.png",
  },
  { name: "Paolo Blu", photo: "/images/candidati/paolo_blu.png" },
  { name: "Carla Verdi", photo: "/images/candidati/carla_verdi.png" },
];

function Candidati() {
  const [filterName, setFilterName] = useState("");
  const filteredData = data.filter((candidato) =>
    candidato.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  );

  return (
    <>
      <h1 className={css.heading}>
        Scopri i <span className={css.purple}>candidati</span>
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
          // <Candidato key={idx} data={candidato} />
        ))}
      </div>
    </>
  );
}

export default Candidati;
