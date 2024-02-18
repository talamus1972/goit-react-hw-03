import css from "./SearchBox.module.css"

export default function SearchBox() {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" className={css.input} />
        </>
            
    )
}