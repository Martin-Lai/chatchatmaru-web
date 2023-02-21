import style from "./style.module.css";
import { forwardRef } from "react";

interface HomesectionProps {
    goToContactUs: () => void
}

const HomeSection = forwardRef<HTMLDivElement, HomesectionProps>((props, ref) => {
    return(
        <section className={style.container}  ref={ref}>
            <div className={style.bgSet}>
                <div className={style.logoArea}>
                    <div className={style.logo}></div>
                </div>                        
                <div className={style.txtArea}>
                    <div className={style.txt1}>smarter your customer service</div>
                    <div className={style.txt2}>CHATCHATMARU</div>
                    <div className={style.txt3}>your life assistant</div>   
                </div> 
                <div 
                    className={style.tryBtn}
                    onClick={props.goToContactUs}
                >TRY NOW</div>   
            </div>        
        </section>             
    );
});

export default HomeSection;
  