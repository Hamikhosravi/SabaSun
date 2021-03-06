import React, {Component} from "react";
import '../Css/AsideLeft.css'

export default class AsideLeft extends Component{

    render(){
        return(
            <div className="leftAside">
                <aside>
                    <section className="social">
                        <a href="" className="apple"> </a>
                        <a href="" className="android"> </a>
                    </section>
                </aside>
            </div>
        )
    }
}