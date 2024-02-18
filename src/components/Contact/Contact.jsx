import css from "./Contact.module.css"

export default function Contact({name, number}) {
    return (
        <>
            <li className={css.item} >
                <div>
                <div className={css.text} >
                <span>Icon</span>       
                <p>{name}</p>
            </div>  
            <div className={css.text}>
                <span>Icon</span>           
                <p>{number}</p>                
            </div>
                </div>    
            
        <button className={css.btn}>Delete</button>           
    </li>               
        </>          
    
    )
}