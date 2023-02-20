import style from "./style.module.css";

const SpecialSection = () => {
    return(
        <section className={style.container}>
            <div className={style.txt1}>CHATCHATMARU Makes Chatting Easily</div>
            <div className={style.txt2}>Chatchatmaru could also supporting multiple language chatting</div>
            <div className={style.image}></div>
        </section>
    );
};  

export default SpecialSection;