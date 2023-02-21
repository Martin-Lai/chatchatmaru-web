import { forwardRef } from "react";
import style from "./style.module.css";

const SpecialSection = forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <section className={style.container} ref={ref}>
            <div className={style.txt1}>CHATCHATMARU Makes Chatting Easily</div>
            <div className={style.txt2}>Chatchatmaru could also supporting multiple language chatting</div>
            <div className={style.image}></div>
        </section>
    );
});  

export default SpecialSection;