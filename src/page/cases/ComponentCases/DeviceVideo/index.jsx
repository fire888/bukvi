import React, {useState} from "react";
import {DeviceImg} from "./DeviceVideo.styled";

const DeviceVideo = (
    {border,video,maxWidth}
    ) => {

    const [videoTitile, setVideoTitile] = useState(video);

    return (
        <DeviceImg>
            <div style={{textAlign: "center"}}>
            <video style={{borderRadius: border, maxWidth: maxWidth}}  data-autoplay muted loop width="100%" height="100%">
                <source src={videoTitile} type="video/mp4"/>
            </video>
            </div>
        </DeviceImg>
    )
};

export default DeviceVideo;
