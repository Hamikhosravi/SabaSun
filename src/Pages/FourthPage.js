import React, {Component} from "react";
import '../Css/FourthPage.css';
import per01 from "../Image/per01.jpg";
import per02 from "../Image/per02.jpg";
import per03 from "../Image/per03.jpg";
import per04 from "../Image/per04.jpg";
import per05 from "../Image/per05.jpg";
// import $ from "jquery";

export default class FourthPage extends Component{

    componentDidMount() {

    }

    render(){
        return(
            <section className="wholeFourthPage Page">
                <section className="fourthPage">
                    <div className="fourthInside">
                        <article className="fourthPageContent">
                            <h3 className="fourthHeader">درباره مکاره</h3>
                            <p className="firstContent">به عنوان مجموعه ای که مشتریان اصلی اش کسب و کار ها هستند. معتقدیم برای راه اندازی یک کسب و کار آنلاین فروشگاه ساز یا سامانه سفارش گذاری اثر بخشمیبایست مشتریان  (و مخاطبین) شما، خواسته و انتضاراتشان را شناسایی،تحلیل و درک کنیمو با شما به مفهوم مشترکی از اهداف پروژه برسیم. تعریف درست و مورد توافقاهداف پروژه به اتخاژ استراتژی مناسب برای طراحی، تولید و مدیریت محتوای مورد نیاز به عنوان منبع اصلی پروژه میانجامد. زمانبندی مناسب برای تکمیل آن پایه یرزی و روش های کنترل پروژه به شمااعلام میشود. </p>
                            <p className="secondContent">یه فروشگاه ساز موفق به کاربرانش امکانات کاملی برای مدیریت محتوا، مدیریت محصولات، موجودی، قیمت گذاری و لجستیک می دهد. شما از ما راهکار بازار محور بخواهید.</p>
                        </article>
                        <section className="team">
                            <h3>تیم مکاره</h3>
                            <div className="teamInfo">
                                <picture>
                                    <img src={per01} alt=""/>
                                    <h5>علی رضا احمدی</h5>
                                    <p>طراح رابط کاربری</p>
                                </picture>
                                <picture>
                                    <img src={per02} alt=""/>
                                    <h5>مینا مهدوی</h5>
                                    <p>برنامه نویس</p>
                                </picture>
                                <picture>
                                    <img src={per03} alt=""/>
                                    <h5>رضا بابکی</h5>
                                    <p>مدیر ارشد</p>
                                </picture>
                                <picture>
                                    <img src={per04} alt=""/>
                                    <h5>جواد حسابی</h5>
                                    <p>منابع انسانی</p>
                                </picture>
                                <picture>
                                    <img src={per05} alt=""/>
                                    <h5>نسرین محمدی</h5>
                                    <p>روابط عمومی</p>
                                </picture>

                            </div>
                        </section>
                    </div>

                </section>
            </section>
        )
    }
}