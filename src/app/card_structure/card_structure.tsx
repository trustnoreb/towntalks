import css from "./card_structure.module.css";
import Image from "next/image";
const data = [
  {
    key: 1,
    name: "firstCard",
    title: "I candidati",
    icon: (
      <Image
        src="/images/candidati_photo.png"
        width={200}
        height={200}
        alt="Candidati"
      />
    ),
    descr:
      "Nella presente sezione troverai informazioni sui candidati alle elezioni",
  },
  {
    key: 2,
    name: "secondCard",
    title: "Le tematiche",
    icon: (
      <Image
        src="/images/tematiche_photo.png"
        width={200}
        height={200}
        alt="Tematiche"
      />
    ),
    descr:
      "In questa parte potrai esaminare le tematiche del dibattito politico",
  },
  {
    key: 3,
    name: "thirdCard",
    title: "Il confronto",
    icon: (
      <Image
        src="/images/confronto_photo.png"
        width={200}
        height={200}
        alt="Confronto"
      />
    ),
    descr: "Per prendere una decisione consapevole, confronta i candidati",
  },
];

function CardStructure() {
  return (
    <>
      {data.map((card, idx) => (
        <div
          key={idx}
          className={`${css.card} ${idx % 2 === 0 ? css.violet : css.yellow}`}
        >
          <h2
            className={`${css.card_title} ${
              idx % 2 === 0 ? css.white_font : css.black_font
            }`}
          >
            {card.title}
          </h2>
          <span>{card.icon}</span>
          <p className={idx % 2 === 0 ? css.white_font : css.black_font}>
            {card.descr}
          </p>
        </div>
      ))}
    </>
  );
}

export default CardStructure;
