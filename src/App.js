import React,{Component} from 'react';
import $ from "jquery";
import './Css/App.css'
import './Css/Elevator.css'
import './Css/Responsive global.css';
import './Css/Responsive.css';
import {Header,Footer,FirstPage,SecondPage,ThirdPage,FourthPage,AsideLeft} from './Pages'

export default class App extends Component{

    componentDidMount() {
        let h = $(window).innerHeight();

        $(window).scrollTop(0);
        $(document).scroll(Scroll);
        function Scroll(){

           if ($(window).scrollTop() === 20){
               // $('.secondInside>.photos').scrollTop(0);
               // $('.secondInside>.photos').css("overflow" , "hidden");
               // $('.secondInside>.showButton').fadeIn(500);
               // $('.secondInside>.whiteCover').fadeIn(500);
                   $('html,body').animate({
                       scrollTop : 10,
                   },500)
               $('.wholePages .Page').each(function(){
                   if($(this).height() > 0 && !$(this).hasClass('lastPage')){
                       $(this).addClass('heightReduction');
                       // if ($(this).next().hasClass('wholeLastPageFooter') ){
                       //     $('.continue').fadeOut(0);
                       //     $('.foot').fadeIn(0);
                       // }
                       // if($(this).hasClass('wholeLastPageFooter')){
                       //     $(this).find('.footerCover').fadeOut(0);
                       //     $(this).find('.footerCover').delay(500).fadeIn(300);
                       //     $(this).find('.footerFourthPage').fadeOut(0);
                       //     $(this).find('.footerFourthPage').slideDown(500);
                       // }
                       // $('header>nav').slideDown(300);
                       // $('header>.logo').fadeTo(300,1);
                       // $('header>.logo').css('height','100%');
                       // let Index = $(this).index('.Page');
                       // if (Index > -1){
                       //     $('.firstPageName1').css('margin-top' , -110*Index+'px')
                       // }
                       return false;
                   }
                   if($(this).height() > 0 && $(this).hasClass('lastPage')) {
                       $(this).addClass('heightReductionHalf');
                   }
               })
           }

            if ($(window).scrollTop() === 0){
                $('html,body').animate({
                    scrollTop : 10,
                },500)
                // $($('.wholePages>section').get().reverse()).each(function(){
                //     if($(this).height() > h*90/100){
                //         $(this).removeClass('heightIncrement');
                //         if ($(this).next().hasClass('wholeLastPageFooter')){
                //             $('.continue').fadeIn(0);
                //             $('.foot').fadeOut(0);
                //         }
                //         if ($(this).prev().hasClass('wholeFirstPage')){
                //             $('header>nav').slideUp(300);
                //             $('header>.logo').fadeTo(300,0);
                //             $('header>.logo').css('height','0');
                //         }
                //         let Index = $(this).index('.Page')-1;
                //         if (Index > -1){
                //             $('.firstPageName1').css('margin-top' , -110*Index+'px')
                //         }
                //         return false;
                //     }
                // })
            }

        }

    }

    mainPageClicked = () =>{
        $('.itemSearch').removeClass('increment');
    }

    render(){
        return(
            <main className="wholePages" onClick={this.mainPageClicked}>

                <Header />
                <MainPages />
                <Footer />
                <Aside />

            </main>
        )
    }
}



class MainPages extends Component{

    render(){
        return(
            <main className='elevator'>

                <FirstPage />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                {/*<LastPageFooter />*/}

            </main>
        )
    }

}

class Aside extends Component{

    render(){
        return(
            <>
                <AsideLeft />

            </>
        )
    }
}












