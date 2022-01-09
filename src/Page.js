import React, { Component } from 'react'

import Navigation from './Components/Navigation'
import Header from './Components/Header'
import Input from './Components/Input'
import Section from './Components/Section'
import Footer from './Components/Footer'

import "./Ui.scss"

export default class Page extends Component {
    render() {
        return (
            <>
                    <Navigation/>
                    <Header/>
                    <Input/>
                    <Section/>
                    <Footer/>
            </>
        )
    }
}
