import React, {Component} from "react";
import '../../Css/Footer.css';
import '../../Css/Icomoon.css'
import $ from "jquery";

export default class Footer extends Component {


    render() {
        return (
            <section className="wholeLastPageFooter">
                {/*<div className="footerCover"> </div>*/}
                <footer className="footerPage">
                    <ul className="FooterAbove">

                        <li className="footerFirstPart">
                            <ul className='services'>خدمات
                                <li>نصب و راه اندازی</li>
                                <li>ورود اعضاء</li>
                                <li>سرویس و نگهداری</li>
                                <li>اخبار و رویدادها</li>
                                <li>پروژه ها</li>
                            </ul>
                        </li>
                        <li className="footerSecondPart">
                            <ul className='services'>خدمات
                                <li>نصب و راه اندازی</li>
                                <li>ورود اعضاء</li>
                                <li>سرویس و نگهداری</li>
                                <li>اخبار و رویدادها</li>
                                <li>پروژه ها</li>
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
                                    <ul className="socials">
                                        <li className='whatsapp'><a href=""><span className="icon-whatsapp"></span></a></li>
                                        <li className='telegram'><a href=""><span className="icon-telegram"></span></a></li>
                                        <li className='instagram'><a href=""><span className="icon-instagram"></span></a></li>
                                        <li className='facebook'><a href=""><span className="icon-facebook2"></span></a></li>
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

