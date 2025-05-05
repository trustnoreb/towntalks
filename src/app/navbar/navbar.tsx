"use client";
import Link from "next/link";
import css from "./navbar.module.css";
import Image from "next/image";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
function Navbar() {
  return (
    <nav className={css["navbar-container"]}>
      <Link href="/" className={css["navbar-item"]}>
        <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
      </Link>
      <Link href="/" className={css["navbar-item"]}>
        Home
      </Link>
      <Link href="/about" className={css["navbar-item"]}>
        Candidati
      </Link>
      <Link href="/contact" className={css["navbar-item"]}>
        Tematiche
      </Link>
      <Link href="/contact" className={css["navbar-item"]}>
        Confronto
      </Link>
      <Link href="/contact" className={css["navbar-item"]}>
        FAQ
      </Link>
      <Link href="/contact" className={css["navbar-item"]}>
        <AdminPanelSettingsIcon sx={{ fontSize: 40, color: "#8A2CF4" }} />
      </Link>
    </nav>
  );
}

export default Navbar;
