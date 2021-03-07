import React, {Component} from 'react';
import $ from "jquery";
import './Css/App.css'
import './Css/Elevator.css'
import './Css/Responsive global.css';
import './Css/Responsive.css';
import {Header, Footer, FirstPage, SecondPage, ThirdPage, FourthPage, AsideLeft, AsideRight, AsideFloorNumber} from './Pages'

let Index, Length, floorNumber;

export default class App extends Component {

    state = {
        flrNumber: ''
    }

    componentDidMount() {
        $('.wholePages .Page').last().addClass('lastPage');

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

                return false;
            }
            if ($(this).height() > 0 && $(this).hasClass('lastPage')) {
                $(this).addClass('heightReductionHalf');
            }
        })
    }

    Up = () => {
        $($('.wholePages .Page').get().reverse()).each(function () {

            Index = $(this).index();
            floorNumber = Length - Index + 1;

            if ($(this).hasClass('heightReduction')) {
                $(this).next().removeClass('backgroundTransparent');
            }

            if ($(this).hasClass('heightReductionHalf') || $(this).hasClass('heightReduction')) {
                $(this).removeClass('heightReductionHalf heightReduction');

                return false;
            }

        })
    }






    mainPageClicked = () => {
        $('.itemSearch').removeClass('increment');
    }

    render() {
        // console.log(this.state.flrNumber)
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


class MainPages extends Component {

    render() {
        return (
            <main className='elevator'>

                {/*<FirstPage/>*/}
                {/*<SecondPage/>*/}
                {/*<ThirdPage/>*/}
                {/*<FourthPage/>*/}

            </main>
        )
    }

}

class Aside extends Component {

    render() {
        return (
            <>
                <AsideFloorNumber floor={this.props.floor}/>
                <AsideLeft/>
                <AsideRight pos={this.props.floor} len={this.props.len}/>
            </>
        )
    }
}












