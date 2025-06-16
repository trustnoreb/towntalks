import Image from "next/image";
import css from "./section.module.css";
interface Props {
  data: {
    question: string;
    descr: string;
    imageName: string;
  };
}
function Section({ data }: Props) {
  return (
    <div className={css.section_container}>
      <div className={css.section_text_container}>
        <h1>{data.question}</h1>
        <p className={css.section_text}>{data.descr}</p>
      </div>
      <Image
        src={`/images/${data.imageName}`}
        alt={data.imageName}
        width={450}
        height={450}
        className={css.section_image}
      />
    </div>
  );
}
export default Section;
