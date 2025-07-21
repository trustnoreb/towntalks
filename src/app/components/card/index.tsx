import css from "./card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ReactElement } from "react";

interface Props {
  icon?: ReactElement;
  name: string;
  photo: string;
  descr?: string;
}

function Card({ icon, name, photo, descr }: Props) {
  console.log("ICON:", icon);

  return (
    <div className={css.container}>
      <Image
        src={photo}
        alt={name}
        width={450}
        height={300}
        className={css.card_image}
      />
      <div className={icon ? css.name : css.title_tag}>
        {!icon ? (
          <h2>{name}</h2>
        ) : (
          <>
            <span>
              <span> {icon}</span>
              <span> {name}</span>
            </span>
          </>
        )}
      </div>
      {descr && <div>{descr}</div>}
      <div className={css.discover_container}>
        <div className={css.discover}>
          <motion.div
            className={css.arrow}
            initial={{ marginRight: "0" }}
            whileHover={{ marginRight: "10px" }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            Scopri
          </motion.div>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
}

export default Card;
