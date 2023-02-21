import { forwardRef } from "react";
import style from "./style.module.css"

interface ContactProps{
    goToContactUs: ()=>void
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
    return(
        <div className={style.container} ref={ref}>
            <div className={style.flex_col}>
                {/* <div style={{fontSize:'24px',fontWeight:'600'}}>Contact us for more information</div> */}
                <div className={style.title}>Contact us for more information</div>
                <div className={style.text}>Please left your e-mail and question, we will contact you as soon as possible</div>
                <form>
                    <div className={style.inputTitle}>E-mail</div>
                    <input type="text" placeholder="please enter your e-mail address"/>
                    <div className={style.inputTitle}>Name</div>
                    <input type="text" placeholder="how should we call you?"/>
                    <div className={style.inputTitle}>Question</div>
                    <textarea placeholder="please describe your question or type what kind information you like to get more?"/>
                    
                </form>
                <button 
                    className={style.btn}
                    onClick={props.goToContactUs}    
                >SEND</button>
            </div>
        </div>
    );
});

export default Contact;