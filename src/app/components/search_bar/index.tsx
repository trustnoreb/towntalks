"use client";
import SearchIcon from "@mui/icons-material/Search";
import css from "./search_bar.module.css";
import { SetStateAction, useState } from "react";

function SearchBar({
  setFilter,
}: {
  setFilter: React.Dispatch<SetStateAction<string>>;
}) {
  const [search, setSearch] = useState();
  console.log(search, setSearch);
  return (
    <div className={css.search_bar}>
      <input
        type="text"
        placeholder="Cerca"
        name="search"
        onChange={(e) => setFilter(e.target.value)}
      />
      <span className={css.search_icon}>
        <SearchIcon />
      </span>
    </div>
  );
}
export default SearchBar;
