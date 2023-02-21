import style from "./style.module.css";
import logo from "../../images/logo.svg"

interface FooterProps{
    goToHome: ()=>void,
    goToProduct: ()=>void,
    goToSpecial: ()=>void,
    goToContactUs: ()=>void
}

const Footer = (props:FooterProps) => {
    return(
        <div className={style.container}>
            <div className={style.flex_col}>
                <img src={logo} alt="logo" />
                <div className={style.siteUrl}>©chatchatmaru.com</div>
                <div className={style.flex_row}>               
                    <button onClick={props.goToHome}>Home</button>
                    <button onClick={props.goToProduct}>Product</button>
                    <button onClick={props.goToSpecial}>Special</button>
                    <button onClick={props.goToContactUs}>Contant Us</button>
                </div>
                <div className={style.copyRight}>Copyright © 2023 Chatchatmaru. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;