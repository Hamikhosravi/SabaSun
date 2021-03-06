import React, {Component} from "react";
import '../Css/SecondPage.css';

import land01 from "../Image/land01.jpg";
import land02 from "../Image/land02.jpg";
import land03 from "../Image/land03.jpg";
import land04 from "../Image/land04.jpg";
import land05 from "../Image/land05.jpg";
import land06 from "../Image/land06.jpg";
import land07 from "../Image/land07.jpg";
import land08 from "../Image/land08.jpg";
import $ from "jquery";

export default class SecondPage extends Component{

    componentDidMount() {

        $('.secondInside>.photos').addClass('customScrollbar');
        $('.secondInside>.showButton').click(function (){
            $('.secondInside>.photos').css("overflow" , "auto");
            $('.secondInside>.showButton').fadeOut(100);
            $('.secondInside>.whiteCover').fadeOut(100);
        })


    }

    render(){
        return(
            <section className="wholeSecondPage Page">
                <section className="secondPage">
                    <div className="secondInside">
                        <section className="photos">
                            <ul className="grid">
                                <li className="grid1"><img src={land01} alt=""/></li>
                                <li className="grid2"><img src={land02} alt=""/></li>
                                <li className="grid3"><img src={land03} alt=""/></li>
                                <li className="grid4"><img src={land04} alt=""/></li>
                                <li className="grid5"><img src={land05} alt=""/></li>
                                <li className="grid6"><img src={land06} alt=""/></li>
                                <li className="grid7"><img src={land07} alt=""/></li>
                                <li className="grid8"><img src={land08} alt=""/></li>
                            </ul>
                        </section>
                        <div className="whiteCover"> </div>
                        <p className="showButton">مشاهده باقی پست ها</p>
                    </div>
                </section>
            </section>
        )
    }
}