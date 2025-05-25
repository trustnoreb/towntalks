"use client";
import Image from "next/image";
import css from "./home-content.module.css";
export default function HomeContent() {
  return (
    <div className={css.content}>
      <div className={css.wrapper}>
        <div>
          <h1>
            Benvenuto su <span className={css.town}>Town</span>
            <span className={css.talks}>Talks</span>
          </h1>
          <h2>La piattaforma di banchmarking politico</h2>
          <p>
            Scopri, confronta e analizza le opinioni politiche per restare
            sempre <br />
            informato e fare la differenza nella tua comunità. Unisciti a noi e
            <br />
            partecipa al dibattito che costruisce il futuro.
          </p>
        </div>
        <div>
          <Image
            src="/images/home.png"
            width={300}
            height={300}
            alt="Home Image"
          />
        </div>
      </div>
    </div>
  );
}
