import Image from "next/image";
import css from "./page.module.css";
import Navbar from "./navbar/navbar";
import HomeContent from "./home_content/home_content";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
    </>
  );
}
