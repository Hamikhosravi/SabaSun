import React, {Component} from "react";
import '../Css/Footer.css'

export default class Footer extends Component{

    render(){
        return(
            <div className="Footer">
                <footer>
                    <section className="social">
                        <a href="http://makareh.com/" className="android"> </a>
                        <a href="http://makareh.com/" className="apple"> </a>
                    </section>
                </footer>
            </div>
        )
    }
}