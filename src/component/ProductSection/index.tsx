import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./style.module.css";
import robot1 from "../../images/robot_1.png";
import robot2 from "../../images/robot_2.png";
import robot3 from "../../images/robot_3.png";
import robot4 from "../../images/robot_4.png";
import { forwardRef } from "react";

interface ProductSectionProps {
    goToContactUs: () => void
}

const ProductSection = forwardRef<HTMLDivElement, ProductSectionProps>((props, ref) => {
    return (
        <section className={style.container} ref={ref}>
            <div className={style.txt1}>Empowering companies to stand out with customer experience</div>
            <div className={style.txt2}>Create an efficient and intelligent environment, realize agile operations, and form a new way of working</div>
            <div className={style.comicGrid}>
                <div className={`${style.panel_1} ${style.panelItem}`}>
                    <h2>AI SMARTER CUSTOMER SERVICE</h2>
                    <div>We offered realtime AI chatbot for answering all questions from your potential customers, collecting the customer informations, and exporting as a dashboard backend.</div>
                    <img src={robot1} alt="robot_1_img" />
                </div>
                <div className={`${style.panel_2} ${style.panelItem}`}>
                    <h2>SUPERVISED AI TRANING</h2>
                    <div>Chatchatmaru can collect question and sentence for training itself becoming more comprehensive.</div>
                    <img src={robot2} alt="robot_2_img" />
                </div>
                <div className={`${style.panel_3} ${style.panelItem}`}>
                    <h2>CUSTOMER SERVICE DASHBOARD</h2>
                    <div>You can overview all customer informations, all data Chatchatmaru collected, and all dialogue made by Chatchatmaru anytime, Chatchatmaru is not only a cutomer service, but a data collector and dashboard.</div>
                    <img src={robot3} alt="robot_3_img" />
                </div>
                <div className={`${style.panel_4} ${style.panelItem}`}>
                    <h2>AUTOMATIC USER GROUPING</h2>
                    <div>Chatchatmaru can grouping different customers by chatting and events, you can push different message to different groups.</div>
                    <img src={robot4} alt="robot_4_img" />
                </div>
                <div className={`${style.panel_5} ${style.panelItem}`}>
                    <h2>ADVERTISING DRAINAGE SERVICE</h2>
                    <div>Create an efficient and intelligent environment, realize agile operations, and form a new way of working</div>
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className={style.forSwiper}
            >
                <SwiperSlide>
                    <div className={`${style.panel_1} ${style.panelItem}`}>
                        <h2>AI SMARTER CUSTOMER SERVICE</h2>
                        <div>We offered realtime AI chatbot for answering all questions from your potential customers, collecting the customer informations, and exporting as a dashboard backend.</div>
                        <img src={robot1} alt="robot_1_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.panel_2} ${style.panelItem}`}>
                        <h2>SUPERVISED AI TRANING</h2>
                        <div>Chatchatmaru can collect question and sentence for training itself becoming more comprehensive.</div>
                        <img src={robot2} alt="robot_2_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.panel_3} ${style.panelItem}`}>
                        <h2>CUSTOMER SERVICE DASHBOARD</h2>
                        <div>You can overview all customer informations, all data Chatchatmaru collected, and all dialogue made by Chatchatmaru anytime, Chatchatmaru is not only a cutomer service, but a data collector and dashboard.</div>
                        <img src={robot3} alt="robot_3_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.panel_4} ${style.panelItem}`}>
                        <h2>AUTOMATIC USER GROUPING</h2>
                        <div>Chatchatmaru can grouping different customers by chatting and events, you can push different message to different groups.</div>
                        <img src={robot4} alt="robot_4_img" />
                    </div>
                </SwiperSlide>
            </Swiper>        
            <div className={style.txt3}>If you wants to get more information by Chatchatmaru, please <button
            onClick={props.goToContactUs}
            >contact us</button></div>
        </section>

    );
});

export default ProductSection;