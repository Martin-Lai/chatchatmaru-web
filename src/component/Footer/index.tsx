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
                <div style={{paddingTop:'18px'}}>©chatchatmaru.com</div>
                <div className={style.flex_row}>
                    <div onClick={props.goToHome}>Home</div>
                    <div onClick={props.goToProduct}>Product</div>
                    <div onClick={props.goToSpecial}>Special</div>
                    <div onClick={props.goToContactUs}>Contant Us</div>
                </div>
                <div style={{textAlign:'center'}}>Copyright © 2023 Chatchatmaru. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;