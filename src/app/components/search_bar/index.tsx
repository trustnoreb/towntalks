import SearchIcon from "@mui/icons-material/Search";
import css from "./search_bar.module.css";

function SearchBar() {
  return (
    <div className={css.search_bar}>
      <input type="text" placeholder="Cerca" name="search" />
      <span className={css.search_icon}>
        <SearchIcon />
      </span>
    </div>
  );
}
export default SearchBar;
