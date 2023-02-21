import style from "./style.module.css"

const Contact = () => {
    return(
        <div className={style.container}>
            <div className={style.flex_col}>
                <div style={{fontSize:'24px',fontWeight:'600'}}>Contact us for more information</div>
                <div className={style.text}>Please left your e-mail and question, we will contact you as soon as possible</div>
                <form>
                    <div>E-mail</div>
                    <input type="text" placeholder="please enter your e-mail address"/>
                    <div>Name</div>
                    <input type="text" placeholder="how should we call you?"/>
                    <div>Question</div>
                    <textarea placeholder="please describe your question or type what kind information you like to get more?"/>
                    
                </form>
                <div className={style.btn}>SEND</div>
            </div>
        </div>
    );
};

export default Contact;