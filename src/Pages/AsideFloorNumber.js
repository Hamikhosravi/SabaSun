import React, {Component} from "react";
import '../Css/AsideFloorNumber.css'

export default class AsideFloorNumber extends Component{

    render(){
        if (this.props.floor <= 9){
            return(
                <div className="floorNumberAside">
                    <p>0{this.props.floor}</p>
                </div>
            )
        } else {
            return(
                <div className="floorNumberAside">
                    <p>{this.props.floor}</p>
                </div>
            )
        }

    }
}