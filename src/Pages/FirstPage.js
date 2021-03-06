import React, {Component} from "react";
import '../Css/FirstPage.css';
import slider01 from "../Image/slider01.jpg";
import slider02 from "../Image/slider02.jpg";
import slider03 from "../Image/slider03.jpg";
import $ from "jquery";

export default class FirstPage extends Component{

    componentDidMount() {
        let counter =0;

        $('.sliderButtons li').click(function (){
            counter = $(this).index();
            // clearInterval(check1);
            // check1 = setInterval(Slider, 7000);
            $(this).parent().siblings().slideUp(500, function(){
                let itemCounter = $('.sliderButtons li').eq(counter);
                $(this).attr('src', itemCounter.children('img').attr('src'));
                itemCounter.css("background-color", "coral");
                itemCounter.siblings('li').css("background-color", "lightgray");
            }).slideDown(500)

        })

        // let check1 = setInterval(Slider, 7000);
        // function Slider(){
        //     ++counter;
        //     if (counter > (($('.sliderButtons li').length)-1) ){
        //         counter = 0;
        //     }
        //     $('.sliderButtons li').eq(counter).click();
        // }
    }

    render(){
        return(
            <section className="wholeFirstPage Page">
                <section className="firstPage">
                    {/*<div className="firstInside">*/}
                    {/*    <section className="slider">*/}
                    {/*        <img src={slider01} alt="" className="firstPageSliderPhoto"/>*/}
                    {/*        <ul className="sliderButtons">*/}
                    {/*            <li><img src={slider01} alt=""/></li>*/}
                    {/*            <li><img src={slider02} alt=""/></li>*/}
                    {/*            <li><img src={slider03} alt=""/></li>*/}
                    {/*        </ul>*/}
                    {/*    </section>*/}
                    {/*</div>*/}
                </section>
            </section>
        )
    }
}