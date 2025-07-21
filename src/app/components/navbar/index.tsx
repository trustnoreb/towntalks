"use client";
import Link from "next/link";
import css from "./navbar.module.css";
import Image from "next/image";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";

const links = [
  { path: "", label: "Logo", type: "image", image: "/images/logo.png" },
  { path: "/", label: "Home", type: "text" },
  { path: "/candidati_page", label: "Candidati", type: "text" },
  { path: "/tematiche_page", label: "Tematiche", type: "text" },
  { path: "/faq", label: "FAQ", type: "text" },
  { path: "/admin_settings", label: "Admin", type: "icon" },
];

function Navbar() {
  const [activePath, setActivePath] = useState("/");

  return (
    <nav className={css["navbar-container"]}>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className={`${css["navbar-item"]} ${
            activePath === link.path ? css["active"] : null
          }`}
          onClick={() => setActivePath(link.path)}
        >
          {link.type === "image" && (
            <Image src={link.image!} alt={link.label} width={50} height={50} />
          )}
          {link.type === "icon" && (
            <AdminPanelSettingsIcon sx={{ fontSize: 40, color: "#8A2CF4" }} />
          )}
          {link.type === "text" && <span>{link.label}</span>}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
