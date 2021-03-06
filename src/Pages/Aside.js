import React,{Component} from 'react';
import '../Css/Aside.css';
import $ from "jquery";


export default class Aside extends Component{

    componentDidMount() {
        $('.continue,.foot').click(function () {
            $(window).scrollTop(20);
        })
    }

    render(){
        return(
            <div className="">
                <aside className="rightAside">
                    <p className="continue">مشاهده ادامه سایت</p>
                    <p className="foot">مشاهده فوتر</p>
                </aside>
                <aside className="leftAside">
                    <ul>
                        <li className="firstPageName1">معرفی مکاره</li>
                        <li className="firstPageName2">پست ها</li>
                        <li className="firstPageName3">استفاده از مکاره</li>
                        <li> درباره مکاره</li>
                    </ul>
                    <div className="asideDownCover"> </div>
                    <div className="asideUpCover"> </div>
                </aside>
            </div>
        )
    }
}