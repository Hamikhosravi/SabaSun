import React, {Component} from "react";
import '../../Css/FirstPage.css';
import firstElevator from "../../Image/firstElevator.png"
import secondElevator from "../../Image/secondElevator.png"
import $ from "jquery";

export default class FirstPage extends Component {

    render() {
        return (
            <section className="wholeFirstPage Page">
                <section className="firstPage">
                    <article className="firstPageContent">
                        <h1>آسوده در آســانســــور حرکت کنید</h1>
                        <div>
                            <a className='backup' href="">پشتیبانی</a>
                            <a className='aboutus' href="">درباره ما</a>
                        </div>
                    </article>
                    <div className='firstPagePhotos'>
                        <div className="firstPhoto"><img src={firstElevator} alt="SabaSun Elevator"/></div>
                        <div className="secondPhoto"><img src={secondElevator} alt="SabaSun Elevator"/></div>
                    </div>
                </section>
            </section>
        )
    }
}