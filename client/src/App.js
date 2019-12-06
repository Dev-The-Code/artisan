import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Slider from './components/header/Slider';

// import Burgermenu from './components/header/burgermenu';
// import { HttpUtils } from "./Services/HttpUtils";



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: ''
        };
    }

    render() {
        const hide = true;
        return (
            <div >
                <span className="hidden-xs" style={{ marginTop: "46px" }}></span>
                <span className="visible-xs" style={{ marginTop: "-19px" }}></span>
                <div>
                    <div className="background-image" >
                        {/* <Burgermenu /> */}
                        <Slider mainH1="Pak Jazba" mainH2="Connecting Communities" hide={hide} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
