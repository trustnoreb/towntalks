import CardStructure from "../card-structure";
import css from "./home_cards.module.css";

function HomeCards() {
  return (
    <div className={css.card_container}>
      <CardStructure />
    </div>
  );
}
export default HomeCards;
