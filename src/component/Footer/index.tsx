import style from "./style.module.css";
import logo from "../../images/logo.svg"

const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.flex_col}>
                <img src={logo} alt="logo" />
                <div style={{paddingTop:'18px'}}>©chatchatmaru.com</div>
                <div className={style.flex_row}>
                    <div>Home</div>
                    <div>Product</div>
                    <div>Special</div>
                    <div>Contant Us</div>
                </div>
                <div>Copyright © 2023 Chatchatmaru. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;