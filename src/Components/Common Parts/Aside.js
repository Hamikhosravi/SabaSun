import React, {Component} from "react";
import {AsideFloorNumber, AsideLeft, AsideRight} from "./Asides";


export default class Aside extends Component {

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