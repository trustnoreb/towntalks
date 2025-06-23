"use client";

import Image from "next/image";
import css from "./card.module.css";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
      <Image
        src={data.photo}
        alt={data.name}
        width={450}
        height={300}
        className={css.card_image}
      />
      <div className={css.name}>
        <h2>{data.name}</h2>
      </div>
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
