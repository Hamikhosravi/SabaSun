import React, {Component} from "react";
import '../Css/AsideLeft.css'
import SabaSunApp from '../Image/appSign.png'
export default class AsideLeft extends Component{

    render(){
        return(
            <div className="leftAside">
                <aside>
                    <section className="social">
                        <a href="" className="apple"> </a>
                        <a href="" className="android"> </a>
                    </section>
                    <img className='downloadFromHere' src={SabaSunApp} alt="SabaSun app"/>
                </aside>
            </div>
        )
    }
}