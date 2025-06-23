import Image from "next/image";
import css from "./section.module.css";

interface Props {
  data: {
    question: string;
    descr: string;
    imageName: string;
  };
  index: number;
}

function Section({ data, index }: Props) {
  const isEven = index % 2 == 0;

  return (
    <>
      <div
        className={css.section_container}
        style={{ flexDirection: isEven ? "row" : "row-reverse" }}
      >
        <div className={css.section_text_container}>
          <h1>{data.question}</h1>
          <p className={css.section_text}>{data.descr}</p>
        </div>
        <Image
          src={`/images/${data.imageName}`}
          alt={data.imageName}
          width={380}
          height={380}
          className={css.section_image}
        />
      </div>
    </>
  );
}

export default Section;
