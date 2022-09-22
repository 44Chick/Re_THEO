import React from "react";
import ReactPageScoller from "react-page-scroller";
import HomeStyle from '../css/home.module.css';

import SlideView from "../components/SlideView";

export default function Home() {
    return (
        <div>
            <ReactPageScoller>
                <div className={`${HomeStyle.block} `}
                    style={{
                        textAlign:"center",
                        height:"100vh",
                        backgroundImage: `url("/img/web-Main.jpg")`,
                        backgroundRepeat: 'no-repeat', }}
                >
                </div>
                <div className={`${HomeStyle.block} ${HomeStyle.block2}`}>

                </div>
                <div className={`${HomeStyle.block} ${HomeStyle.block1}`}>

                </div>
                <div className={`${HomeStyle.block} ${HomeStyle.block2}`}>
                    <SlideView />
                </div>
            </ReactPageScoller>
        </div>
    )
}