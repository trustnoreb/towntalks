import Navbar from "./components/navbar/navbar";
import HomeContent from "./components/home_content";
import HomeCards from "./components/home_cards";
import Sections from "./components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <HomeCards />
      <Sections />
    </>
  );
}
