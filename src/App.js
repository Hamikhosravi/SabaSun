import React, {Component} from 'react';
import $ from "jquery";
import './Css/App.css'
import './Css/Elevator.css'
import './Css/Responsive global.css';
import './Css/Responsive.css';
import {Header, Footer, Aside} from './Components/Common Parts';
import MainPages from "./Components/Main Pages/MainPages";

let Index, Length, floorNumber;

export default class App extends Component {

    state = {
        flrNumber: ''
    }

    componentDidMount() {
        $('.wholePages .Page').last().addClass('lastPage');
        $('.wholePages .Page').last().css('height', 'calc(100vh - 80px)');

        $(window).scrollTop(0);
        $(document).scroll(this.Scroll);
        setTimeout(()=>{
            this.setState({flrNumber: Length + 1})
        },100);
        Length = $('.wholePages .Page').length;
    }

    Scroll = () => {

        if ($(window).scrollTop() === 20) {
            this.Down();
            $('html,body').animate({
                scrollTop: 10,
            }, 500)
        }

        if ($(window).scrollTop() === 0) {
            this.Up();
            $('html,body').animate({
                scrollTop: 10,
            }, 500)
        }
        this.setState({flrNumber: floorNumber})
    }

    Down = () => {
        $('.wholePages .Page').each(function () {

            Index = $(this).index() ;
            floorNumber = Length - Index;

            if ($(this).height() > 0 && !$(this).hasClass('lastPage')) {
                $(this).addClass('heightReduction');
                $(this).next().addClass('backgroundTransparent');

            if ($(this).next().hasClass('lastPage')){
                $(this).next().children().addClass('backgroundTransparent');
            }

                if ( $(this).next().hasClass('Applications')) {
                    $('.downloadFromHere').fadeIn(300);
                } else {
                    $('.downloadFromHere').fadeOut(300);
                }

                return false;
            }
            if ($(this).height() > 0 && $(this).hasClass('lastPage')) {
                $(this).addClass('heightReductionHalf');
                $('.leftAside').fadeOut(300);
            }
        })
    }

    Up = () => {
        $($('.wholePages .Page').get().reverse()).each(function () {

            Index = $(this).index();
            floorNumber = Length - Index + 1;

            if ($(this).hasClass('heightReduction')) {
                $(this).next().removeClass('backgroundTransparent');
                $(this).next().children().removeClass('backgroundTransparent');
            }

            if ($(this).hasClass('heightReductionHalf') || $(this).hasClass('heightReduction')) {
                $(this).removeClass('heightReductionHalf heightReduction');
                $('.leftAside').fadeIn(300);

                if ($(this).hasClass('Applications')){
                    $('.downloadFromHere').fadeIn(300);
                } else {
                    $('.downloadFromHere').fadeOut(300);
                }
                return false;
            }
        })
    }

    mainPageClicked = () => {
        $('.itemSearch').removeClass('increment');
    }

    render() {
        return (
            <div className="allPages" onScroll={this.Scroll}>
                <main className="wholePages" onClick={this.mainPageClicked}>

                    <Header/>
                    <MainPages/>
                    <Footer/>
                    <Aside floor={this.state.flrNumber} len={Length+1}/>

                </main>
            </div>
        )
    }
}

















