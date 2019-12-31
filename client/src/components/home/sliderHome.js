import React, { Component } from 'react';
import { Carousel } from 'antd';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import './sliderHome.css'

class SliderHome extends Component{
  render(){
    return(
    <div className="">
     <div class="container" style={{width: isMobile ? '100%' : "88%", marginBottom: isMobile ? '50px' : "125px", marginTop:"20px", padding:"0"}}>
      <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{backgroundColor:"aliceblue"}}>

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active" style={{border:"1px solid black", backgroundColor:"black"}}></li>
      <li data-target="#myCarousel" data-slide-to="1" style={{border:"1px solid black", backgroundColor:"black"}}></li>
      <li data-target="#myCarousel" data-slide-to="2" style={{border:"1px solid black", backgroundColor:"black"}}></li>
      <li data-target="#myCarousel" data-slide-to="3" style={{border:"1px solid black", backgroundColor:"black"}}></li>
    </ol>


    <div class="carousel-inner" style={isMobile ? {padding:"15px"} : {padding:"40px"}}>
      <div class="item active">
        <div>
          <h3 style={{textAlign:"center"}}>About Pak Jazba</h3>
          <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting
           remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

      <div class="item">
      	<div class="">
          <h3 style={{textAlign:"center"}}>More Pak Jazba</h3>
          <p style={{textAlign:"center"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

      <div class="item">
        <div>
          <h3 style={{textAlign:"center"}}>3rd Slider</h3>
          <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="item">
        <div>
          <h3 style={{textAlign:"center"}}>4th Slider</h3>
          <p style={{textAlign:"center"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="container visible-xs" style={{marginTop:"20px"}}>
         <h4> </h4>
       </div>
    </div>

    )
  }
}
export default SliderHome;
{/*<div style={{width:'97%',paddingLeft:'32px',paddingRight:'3px'}}>
    <Carousel autoplay style={{backgroundColor:"white !important"}}>
      <div>
        <h3>About Pak Jazba</h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard<br/> dummy text ever since the 1500,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting
         remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>

      <div>
        <h3>More Pak Jazba</h3>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <div>
        <h3>3rd Slider</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <div>
        <h3>4th Slider</h3>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
    </Carousel>
</div>*/}
