import React from "react";
import {TextTitile,DivVideo, BlockSliderImg} from "./imgScroll.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../assets/img/Aginc/Group 39.png'
import img2 from '../../../../assets/img/Aginc/ag1.png'
import img3 from '../../../../assets/img/Aginc/ag2.png'
import img4 from '../../../../assets/img/Aginc/ag3.png'
import img5 from '../../../../assets/img/Aginc/ag4.png'
import {DeviceImg} from "../DeviceVideo/DeviceVideo.styled";
import videoAginc from "../../../../assets/video/videoAginc.mp4"
import videoAginc2 from "../../../../assets/img/Aginc/Agent.mp4"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: 'block',
                background: "#fff0",
                position: 'absolute',
                width: "50vw",
                height: "100vh",
                right: 0,
                zIndex: 999,
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: 'block',
                background: "#fff0",
                position: 'absolute',
                width: "50vw",
                height: "100vh",
                left: 0,
                zIndex: 999,
            }}
            onClick={onClick}
        />
    );
}



const ImgScroll = () => {
    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <TextTitile>
        <Slider {...settings}>
        <BlockSliderImg>
                <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={videoAginc2} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg>
            <BlockSliderImg>
                <img src={img2}/>
            </BlockSliderImg>
            <BlockSliderImg>
                <img src={img3}/>
            </BlockSliderImg>
            <BlockSliderImg>
                <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={videoAginc} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg>
            <BlockSliderImg>
                <img src={img4}/>
            </BlockSliderImg>
            <BlockSliderImg>
                <img src={img5}/>
            </BlockSliderImg>
        </Slider>
    </TextTitile>
  )
};

export default ImgScroll;
