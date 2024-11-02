import React from 'react';
import './style.scss';


export default function Mareque(props) {
    let progressBar = props.reversed ? {
        float: "left",
        background : "liner-gradient(to left, #222, #ff660050, #ff6600)"
    } : {}

    let dotPosition = props.reversed ? { left : "-1px" } : {}
  return (
    <div>
        <div id="progress-marquee">
            <div className={props.reversed ? "progress-wrapper reversed" : "progress-wrapper"}>
                <div className="progressBar" style={progressBar}>
                    <span className="dot" style={dotPosition}></span>
                </div>
            </div>
        </div>
    </div>
  )
}
