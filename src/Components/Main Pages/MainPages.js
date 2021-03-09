import React, {Component} from "react";
import { FirstPage, SecondPage, ThirdPage,FourthPage,FifthPage, LastPage} from "./index";


export default class MainPages extends Component {

    render() {
        return (
            <main className='elevator'>

                <FirstPage />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                <FifthPage />
                <LastPage />

            </main>
        )
    }

}