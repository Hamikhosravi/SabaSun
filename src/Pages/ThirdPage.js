import React, {Component} from "react";
import '../Css/ThirdPage.css';

import video1 from "../Videos/Record_2020_10_10_10_55_26_889.mp4";
import video2 from "../Videos/02.mp4";
import video3 from "../Videos/03.mp4";
import video4 from "../Videos/04.mp4";
import $ from "jquery";

export default class ThirdPage extends Component{

    componentDidMount() {
        $('.thirdInside>.video>.videos').addClass('customScrollbar');
        $('.videos video').click(function(){
            $('.videoDisplay video').attr("src",$(this).attr("src"));
            $(this).css("border", "2px solid gray");
            $(this).parent().siblings('li').children().css("border", "1px solid lightgray")
        })
    }

    render(){
        return(
            <section className="wholeThirdPage Page">
                <section className="thirdPage">
                    <div className="thirdInside">
                        <h3 className="thirdHeader">آموزش کار با مکاره</h3>
                        <section className="video">
                            <div className="videos">
                                <ul>
                                    <li><video src={video1}> </video> </li>
                                    <li><video src={video2}> </video> </li>
                                    <li><video src={video3}> </video> </li>
                                    <li><video src={video4}> </video> </li>
                                </ul>
                            </div>
                            <div className="videoDisplay">
                                <video src={video1} controls > </video>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        )
    }
}