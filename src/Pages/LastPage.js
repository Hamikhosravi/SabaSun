import React, {Component} from "react";
import '../Css/LastPage.css';
// import $ from "jquery";

export default class LastPage extends Component{

    render(){
        return(
            <section className="wholeLastPage Page">
                <section className="elevatorLastPage">
                    <div>
                        <section className='proofList'>
                            <h2>گواهی نامه ها</h2>
                            <ul><li></li><li></li><li></li><li></li></ul>
                        </section>
                        <section className='staffList'>
                            <h2>لیست همکاران</h2>
                            <ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>
                        </section>
                        {/*<aside className="firstFloorCover"> </aside>*/}
                    </div>
                </section>
            </section>
        )
    }
}