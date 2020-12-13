import PropTypes from "prop-types";
import s from "./Search.module.css";

const Search = ({ onChange, filter }) => {
  const handleOnChange = (event) => {
    const value = event.currentTarget.value;
    onChange(value);
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleOnChange}
      ></input>
    </label>
  );
};

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
