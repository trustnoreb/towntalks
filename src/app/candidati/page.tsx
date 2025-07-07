import Cards from "../components/cards";
import css from "./candidati.module.css";

function Candidati() {
  return (
    <>
      <h1 className={css.heading}>
        Scopri i <span className={css.purple}>candidati</span>
      </h1>
      <h1 className={css.sub_heading}>Tutti i candidati</h1>
      <Cards />
    </>
  );
}

export default Candidati;
