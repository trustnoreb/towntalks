import css from "./card.module.css";

interface Props {
  data: {
    name: string;
    icon: string;
    photo: string;
  };
}
function Card({ data }: Props) {
  return (
    <div className={css.container}>
      <div className={css.name}>
        <h2>{data.name}</h2>
      </div>
      <div className={css.class}>{data.photo}</div>
      <div className={css.class}>{data.icon}</div>
    </div>
  );
}

export default Card;
