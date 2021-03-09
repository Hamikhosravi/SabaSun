import React, {Component} from "react";
import logo1 from "../../Image/Logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import  '../../Css/Header.css';


export default class Header extends Component{
    state = {
        value:'',
    }

    componentDidMount() {

        $('.header ul>li').hover(function(){
            $('.HeaderUnderline').removeClass('noHover');
            $('.HeaderUnderline').width($(this).width()+20);
            let headerPosition = $(this).offset().left - $(this).parent().offset().left;
            $('.HeaderUnderline').css('left', headerPosition + 'px');
        }, function(){
            $('.HeaderUnderline').addClass('noHover');
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
                        <li className="Maghalat">مقالات</li>
                        <li className="SabtSefaresh">ثبت سفارش</li>
                        <li className="darbareMa">درباره ما</li>
                        <li className="tamasBaMa">تماس با ما</li>
                        <li className="HeaderUnderline"> </li>
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