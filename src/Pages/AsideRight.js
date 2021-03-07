import React, {Component} from "react";
import '../Css/AsideRight.css'
import $ from "jquery";

export default class AsideRight extends Component{

    render(){
        let posHeight = $('.elevatorPath').height()/ this.props.len
        $('.elevatorPosition').height(posHeight);
        let Top = (this.props.len - this.props.pos)*posHeight
        $('.elevatorPosition').css('top', Top + 'px')

        return(
            <div className="rightAside">
                <aside>
                    <section className="elevatorPath">
                        <div className="elevatorPosition"> </div>
                        {/*<p>{this.props.pos} and {this.props.len}</p>*/}
                    </section>
                </aside>
            </div>
        )
    }
}