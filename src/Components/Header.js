import React, { Component } from 'react'
import  img from '../img/illustration-working.svg' 
export default class Header extends Component {
    render() {
        return (
            <>
                <header className="header">

                    <div className="header-text-box">
                        <h1 className="heading-primary">
                            More than just shorter links
                        </h1>
                        <p className="header-text">
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </p>
                        <a href="#" className="header-btn ">Get Started</a>
                    </div>
                    <div className="header-image">

                    <img src={img} alt="Girl working on laptop"  />
                    </div>

                </header>
            </>
        )
    }
}
