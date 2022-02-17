import React from "react";
import { H4Made,Cookie, H4Private, Soc, FooterAn} from "../../page/home/home.styled";
//import CookieConsent from "react-cookie-consent";

const Footer = () => {
    return (
        <FooterAn>
            <H4Made>Сделано в Сибири © 2020</H4Made>
            <div className="conteiner footer">
            <div className="gridConteiner">
                <Soc>
                    <a href="#">
                        <p>Instagram</p>

                    </a>
                    <a href="#">
                        <p>Linkedin</p>
                    </a>
                </Soc>
                <div>
                </div>
                <a className="policy"><h4>Политика сайта</h4></a>
            </div>
            {/* <div className="cookCursor">
            <Cookie>
            <CookieConsent
                disableStyles={true}
                buttonText = "ВОТ И СЛАВНО"
                style={{
                background: "#fff0",
                color: "#fff",
                margin: "1px 0px",
                flex: "none",
                justifyContent: "center",
                // position: "absolute",
                display: "flex",
                }}
                onAccept={() => {console.log('clik')}}
            >
                <h2>Мы используем файлы cookie, чтобы обеспечить максимальное удобство использования нашего веб-сайта. Если вы продолжите использовать этот сайт, мы будем считать, что он вам нравится.</h2>
            </CookieConsent>
            </Cookie>
            </div> */}
            </div>
        </FooterAn>
    )
}

export default  Footer ;