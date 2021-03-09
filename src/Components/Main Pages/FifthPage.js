import React, {Component} from "react";
import '../../Css/FifthPage.css';
// import $ from "jquery";
import News1 from '../../Image/News1.png';
import News2 from '../../Image/News2.png';
import News3 from '../../Image/News3.png';

export default class FifthPage extends Component{

    render(){
        return(
            <section className="wholeFifthPage Page">
                <section className="fifthPage">
                    <picture className='mainNews'>
                        <img src={News1} alt="SabaSun News"/>
                        <h4>حضور شرکت مهندسی سبا آسانبر در اولین نمایشگاه تجهیزات و تاسیسات بیمارستانی</h4>
                        <span>1399/12/02</span>
                    </picture>
                    <div className='otherNews'>
                        <picture>
                            <img src={News2} alt="SabaSun News"/>
                            <div>
                                <h4>حضور شرکت مهندسی سبا آسانبر در پانزدهمین نمایشگاه صنعت ساختمان 18 الی 21 مرداد</h4>
                                <p>شركت مهندسی سبا آسانبر در سال 1379 تأسیس و آغاز به کار کرده است و نماینده انحصاری شرکت KONE در سراسر ایران است. مجموع فعالیتهای این شرکت عبارت است.</p>
                                <span>1399/12/02</span>
                            </div>
                        </picture>
                        <picture>
                            <img src={News3} alt="SabaSun News"/>
                            <div>
                                <h4>شرکت مهندسی سبا آسانبر حامی سومین کنفرانس بناهای بلند</h4>
                                <p>شركت مهندسی سبا آسانبر در سال 1379 تأسیس و آغاز به کار کرده است و نماینده انحصاری شرکت KONE در سراسر ایران است. مجموع فعالیتهای این شرکت عبارت است.</p>
                                <span>1399/12/02</span>
                            </div>
                        </picture>
                    </div>
                </section>
            </section>
        )
    }
}