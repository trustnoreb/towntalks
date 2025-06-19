"use client";
import Image from "next/image";
import css from "./home-content.module.css";
export default function HomeContent() {
  return (
    <div className={css.wrapper}>
      <div>
        <h1 className={css.title}>
          Benvenuto su <span className={css.town}>Town</span>
          <span className={css.talks}>Talks</span>
        </h1>
        <h2 className={css.subtitle}>
          La piattaforma di benchmarking politico
        </h2>
        <p className={css.description}>
          Scopri, confronta e analizza le opinioni politiche per restare sempre
          informato e fare la differenza nella tua comunità. <br />
          Unisciti a noi e partecipa al dibattito che costruisce il futuro.
        </p>
      </div>
      <div>
        <Image
          src="/images/home.png"
          width={500}
          height={500}
          alt="Home Image"
        />
      </div>
    </div>
  );
}
