import React, {Component} from "react";
import '../Css/AsideRight.css'

export default class AsideRight extends Component{

    render(){
        return(
            <div className="rightAside">
                <aside>
                    <section className="elevatorPath">
                        <div className="elevatorPosition"> </div>
                        <p>{this.props.pos} and {this.props.len}</p>
                    </section>
                </aside>
            </div>
        )
    }
}