import style from "./style.module.css";

const HomeSection = () => {
    return(
        <section className={style.container}>
            <div className={style.bgSet}>
                <div className={style.logoArea}>
                    <div className={style.logo}></div>
                </div>               
                <div className={style.txtArea}>
                    <div className={style.txt1}>smarter your customer service</div>
                    <div className={style.txt2}>CHATCHATMARU</div>
                    <div className={style.txt3}>your life assistant</div>   
                </div> 
                <div className={style.tryBtn}>TRY NOW</div>   
            </div>        
        </section>             
    );
};

export default HomeSection;