import React, {Component} from "react";
import '../../Css/FourthPage.css';

export default class FourthPage extends Component{

    render(){
        return(
            <section className="wholeFourthPage Page Applications">
                <section className="fourthPage">
                    <article className="fourthPageContent">
                        <h2>اپلیکیشن سبا سرویس</h2>
                        <p>شركت مهندسی سبا آسانبر در سال 1379 تأسیس و آغاز به کار کرده است و نماینده انحصاری شرکت KONE در سراسر ایران است. مجموع فعالیتهای این شرکت عبارت است از: عرضه محصولات شرکت KONE ،آسانسور، پله برقی، رمپ متحرک و پیاده روی متحرک، </p>
                        <a className='appMore' href='/'>امکانات اپلیکیشن</a>
                    </article>
                    <div className='fourthPagePhotos'> </div>

                </section>
            </section>
        )
    }
}