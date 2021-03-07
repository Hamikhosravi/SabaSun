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
                <footer className="footerPage">
                    <ul className="FooterAbove">

                        <li className="footerFirstPart">
                            <ul className='services'>خدمات
                                <li>مورد 1</li>
                                <li>مورد 2</li>
                                <li>مورد 3</li>
                                <li>مورد 4</li>
                                <li>مورد 5</li>
                            </ul>
                        </li>
                        <li className="footerSecondPart">
                            <ul className='services'>خدمات
                                <li>مورد 1</li>
                                <li>مورد 2</li>
                                <li>مورد 3</li>
                                <li>مورد 4</li>
                                <li>مورد 5</li>
                            </ul>
                        </li>
                        <li className="footerThirdPart">
                            <ul className='services'>خدمات
                                <li>درباره ما</li>
                                <li>تماس با ما</li>
                                <li>قوانین و مقررات</li>
                                <li>ثبت شکایت</li>
                            </ul>
                        </li>
                        <li className="footerLogos">
                            <ul>
                                <li><a href="" className="apple"> </a></li>
                                <li><a href="" className="android"> </a></li>
                                <li>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <section className="FooterBelow">
                        <p> تمامی حقوق این سایت مربوط به شرکت دایره پژواک پویا بوده و هر گرونه کپی برداری از این سایت پیگرد قانونی دارد</p>
                    </section>
                    {/*<section className="footerThirdPart"> </section>*/}
                </footer>
            </section>
        )
    }
}

