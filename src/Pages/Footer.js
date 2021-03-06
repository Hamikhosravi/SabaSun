import React, {Component} from "react";
import logo2 from "../Image/Favicon.png";
import namad from "../Image/Namad.png";
import digitalMedia from "../Image/Digital_Media.png";
import '../Css/Footer.css';
import $ from "jquery";

export default class Footer extends Component {

    componentDidMount() {
        $('.footerCover').click(function () {
            $(window).scrollTop(0);
        })
    }


    render() {
        return (
            <section className="wholeLastPageFooter">
                {/*<div className="footerCover"> </div>*/}
                <footer className="footerFourthPage">
                    <section className="footerFirstPart">
                        <div className="footerLogo">
                            <img src={logo2} alt=""/>
                        </div>
                        <div className="footerFirstLink">
                            <header>لینک های سریع 1</header>
                            <ul>
                                <li>مورد 1</li>
                                <li>مورد 2</li>
                                <li>مورد 3</li>
                                <li>مورد 4</li>
                                <li>مورد 5</li>
                                <li>مورد 6</li>
                            </ul>
                        </div>
                        <div className="footerSecondLink">
                            <header>لینک های سریع 2</header>
                            <ul>
                                <li>مورد 1</li>
                                <li>مورد 2</li>
                                <li>مورد 3</li>
                                <li>مورد 4</li>
                                <li>مورد 5</li>
                                <li>مورد 6</li>
                            </ul>
                        </div>
                        <div className="footerThirdLink">
                            <header>تماس با ما</header>
                            <ul>
                                <li>درباره ما</li>
                                <li>تماس با ما</li>
                                <li>قوانین و مقررات</li>
                                <li>ثبت شکایت</li>
                            </ul>
                        </div>
                        <div className="footerAuthorizationLogo">
                            <img src={namad} alt=""/>
                            <img src={digitalMedia} alt=""/>
                        </div>
                    </section>
                    <section className="footerSecondPart">
                        <p> تمامی حقوق این سایت مربوط به شرکت دایره پژواک پویا بوده و هر گرونه کپی برداری از این سایت پیگرد قانونی دارد</p>
                    </section>
                    <section className="footerThirdPart"> </section>
                </footer>
            </section>
        )
    }
}

