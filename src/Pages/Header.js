import React, {Component} from "react";
import logo1 from "../Image/MakarehLogo1080x360.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import  '../Css/Header.css';


export default class Header extends Component{
    state = {
        value:'',
    }

    componentDidMount() {
        $('.mainPage, .header>.logo>img').click(function (){
            $('.continue').fadeIn(0);
            $('.foot').fadeOut(0);
            $('.wholePages>section').removeClass('heightIncrement');
            $('header>nav').slideUp(300);
            $('header>.logo').fadeTo(300,0);
            $('header>.logo').css('height','0');
            let Index = $('.wholeFirstPage').index('.Page');
            if (Index > -1){
                $('.firstPageName1').css('margin-top' , -110*Index+'px')
            }
        })

        $('.postha').click(function (){
            $('.continue').fadeIn(0);
            $('.foot').fadeOut(0);
            $('.wholePages>section').removeClass('heightIncrement');
            $('.wholeSecondPage').addClass('heightIncrement');
            let Index = $('.wholeSecondPage').index('.Page');
            if (Index > -1){
                $('.firstPageName1').css('margin-top' , -110*Index+'px')
            }
        })

        $('.darbareMa').click(function (){
            $('.continue').fadeOut(0);
            $('.foot').fadeIn(0);
            $('.wholePages>section').addClass('heightIncrement');
            $('.wholeFirstPage').removeClass('heightIncrement');
            $('.wholeLastPageFooter').removeClass('heightIncrement');
            let Index = $('.wholeFourthPage').index('.Page');
            if (Index > -1){
                $('.firstPageName1').css('margin-top' , -110*Index+'px');
            }
        })

    }

    itemSearch = (e) => {
        this.setState({value: e.target.value});
    }

    render(){
        return(
            <header className="header">
                <div  className="logo"><img src={logo1} alt="Makareh"/></div>
                <nav>
                    <ul>
                        <li className="mainPage">صفحه اصلی</li>
                        <li>ارسال گزارش</li>
                        <li className="postha">پست ها</li>
                        <li>تماس با ما</li>
                        <li className="darbareMa">درباره ما</li>
                    </ul>
                </nav>
                <section className="profileSearch">

                    <div className='searchIcon' onClick={searchIcon}><FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder='جستجو' className='itemSearch' onChange={this.itemSearch}/>
                    </div>
                    <div className='profile'><FontAwesomeIcon icon={faUser} /></div>
                </section>
            </header>
        )
    }
}

function searchIcon(e){
    $('.itemSearch').addClass('increment');
    e.stopPropagation();
}