import Candidato from "../components/candidato";
import css from "./tematiche.module.css";

function Tematiche() {
  return (
    <>
      <h1 className={css.heading}>
        Scopri i <span className={css.purple}>candidati</span>
      </h1>
      <h1 className={css.sub_heading}>Tutti i candidati</h1>
      <div className={css.cards_container}>
        {/* {data.map((candidato, idx) => (
          <Candidato key={idx} data={candidato} />
        ))} */}
      </div>
    </>
  );
}

export default Tematiche;
