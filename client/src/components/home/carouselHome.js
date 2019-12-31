import React, { Component } from 'react';
// import BussinesCard from '../business/bussinessCard';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import './carouselHome.css';

class CarouselHome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            arrayListing:[],
            to: isMobile && isTablet ? 2 : isBrowser ? 3 : 1
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data !== this.props.data){
            this.setState({
                arrayListing:this.props.data
            })
        }
    }

    handleFarward = (e) =>{
        const { arrayListing, to } = this.state;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;
        if(to < arrayListing.length){
            this.setState({
              to : to + from, backward: false
            });        
        }else {
            this.setState({ farward: true, backward: false })
        }
    }

    handleBackward = e => {
        const { arrayListing, to } = this.state;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;
        if(to > from){
            this.setState({
              to : to - from, farward: false
            })
        }else {
            this.setState({ backward: true, farward: false })
        }
    }
    
    render(){
        const { arrayListing, to, farward, backward } = this.state,
        { detail } = this.props;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;

        return(
            <div className="carousel-reviews broun-block">
                <div className="container" style={{width:"100%"}}>
                    <div className="row" style={{padding:"0"}}>
                        <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {arrayListing && arrayListing.map((elem,key) => {
                                    if(key >= to - from && key < to){
                                        return (
                                            <div key={key} className="item active">
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="">
                                                        {/* <BussinesCard cardDetails={ elem } detail={detail}/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <a disabled={backward} className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleBackward(e)}></span>
                            </a>
                            <a disabled={farward} className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleFarward(e)}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselHome;
