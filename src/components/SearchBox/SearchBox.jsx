import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <>
      <p className={css.text}> Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
