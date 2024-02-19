import css from "./SearchBox.module.css"

export default function SearchBox({ value, onChange }) {
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" className={css.input} onChange={onChange} value={value} />
            
        </>
            
    )
}
