import React from "react";
import IPOGraphics from "./IPOGraphics/IPOGraphics";
import PreIPOGraphics from "./PreIPOGraphics/PreIPOGraphics";

const Graphics = (props) => {

    if(!props.change){
    return (
        <IPOGraphics/>
    )}
    return (
        <PreIPOGraphics/>
    )
}

export default Graphics;