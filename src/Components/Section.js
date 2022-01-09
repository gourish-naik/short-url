import React, { Component } from 'react'

import brand from '../img/icon-brand-recognition.svg';
import detail from '../img/icon-detailed-records.svg';
import custom from '../img/icon-fully-customizable.svg';

export default class Section extends Component {

    componentDidMount=()=> {
        var x= document.getElementsByClassName('b');
        for(var i=0;i<x.length;i++){
            x[i].style.top=`${i*3.5}rem`;
        }
    }
    
    render() {
        return (
            <>
                <div className="section">
                    <div className="sub-section">
                        <div className="sub-section-txt">
                            <strong>Advanced Statistics</strong>
                            <span className="sub-short-txt">
                                Track how your links are performing across the web with our advanced statistics dashboard.
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className="bottom-grid">
                            <div className="b g1">
                                <div className="circle">
                                    <img className="b-i" src={brand} alt="brand" />
                                </div>
                                <strong>Brand Recognition</strong>
                                <span className="b-s">
                                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                </span>
                            </div>
                            <div className="b g2">
                                <div className="circle">
                                    <img className="b-i" src={detail} alt="details" />
                                </div>
                                <strong>Detailed Records</strong>
                                <span className="b-s">
                                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions..
                                </span>
                            </div>
                            <div className="b g2">
                                <div className="circle">
                                    <img className="b-i" src={custom} alt="fully" />
                                </div>
                                <strong>Fully Customizable</strong>
                                <span className="b-s">
                                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
