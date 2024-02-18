import css from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({name, number}) {
    return (
        <>
            <li className={css.item} >
                <div>
                <div className={css.text} >
                <span><IoPersonSharp/></span>       
                <p>{name}</p>
            </div>  
            <div className={css.text}>
                <span><FaPhone/></span>           
                <p>{number}</p>                
            </div>
                </div>    
            
        <button className={css.btn}>Delete</button>           
    </li>               
        </>          
    
    )
}