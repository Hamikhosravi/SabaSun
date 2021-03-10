import React, {Component} from "react";
import '../../Css/SecondPage.css';


export default class SecondPage extends Component{

    render(){
        return(
            <section className="wholeSecondPage Page">
                <section className="secondPage">
                    <article className="secondPageContent">
                        <h2>درباره شرکت سبا آسانبر</h2>
                        <p>شركت مهندسی سبا آسانبر در سال 1379 تأسیس و آغاز به کار کرده است و نماینده انحصاری شرکت KONE در سراسر ایران است. مجموع فعالیت­های این شرکت عبارت است از: عرضه محصولات شرکت KONE ،آسانسور، پله‏ برقی‏، رمپ متحرک و پیاده‏ روی‏ متحرک، دربهای اتوماتیک ساختمان و کلیه خدمات مربوط به فروش، نصب و راه اندازی و سرویس و نگهداری این محصولات. هدف از تأسیس شركت مهندسی سبا آسانبر ورود برترین تكنولوژی دنیا در زمینه­ آسانسور و پله‏ برقی‏ و درب اتوماتیک ساختمان به كشور، ارتقاء سطح توقع جامعه از این صنعت در جهت آسایش و ایمنی مصرف كنندگان، ایجاد خدمات برتر در امر پشتیبانی، طراحی، مشاوره، تهیه، نصب و خدمات پس از فروش بهنگام و موثر بوده است.</p>
                        <a className='more' href="/">مشاهده بیشتر...</a>
                    </article>
                    <div className='secondPagePhotos'> </div>
                </section>
            </section>
        )
    }
}