import Cards from "../components/cards";
import css from "./candidati.module.css";

function Candidati() {
  return (
    <>
      <h1 className={css.heading}>
        Scopri i <span className={css.purple}>candidati</span>
      </h1>
      <h2 className={css.sub_heading}>Tutti i candidati</h2>
      <Cards />
    </>
  );
}

export default Candidati;
