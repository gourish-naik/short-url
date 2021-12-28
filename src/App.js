import React, { Component } from 'react'
import "./App.scss"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: false,
      disable:false,
      status: false,
      data: 'js.org',
      api_data: [],
      msg: "",
      btnTxt: "Submit"
    }
    // this.press = this.press.bind(this);

  }
//time variable
  show;
//event on enter keypressed
  press=(e)=>{
      if (e.keycode === 13) {
      this.ShortMe();
    }
  }

//fetching 

  ShortMe = () => {
    this.setState({disable:true})
    if(this.state.data.length==0){
      alert("enter url");
    }
    else{
    this.setState({ btnTxt: "Fetching..." })
    fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.data}`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          api_data: results.result,
          status: true,
          disable:false,
        })
        console.log(results);
      })
      .catch(e => {
        this.setState({ data: '', status: false });
        console.log(e);
      })
    }
  }
//read user input

  userInput = (e) => {
    this.setState({
      data: e.target.value,
      status: false,
      copy: false,
      btnTxt:"Submit"
    })
  }

// copy to clipboard 

  copyMe = () => {
    navigator.clipboard.writeText(this.state.api_data.short_link)
    this.setState({
      copy: true
    })
    this.setState({ msg: "copied!" })
    this.show = setTimeout(() => {
      this.setState({ msg: "" })
    }, 2000);
  }

  render() {
    const { status } = this.state;
    const { api_data } = this.state;
    return (

      <div className="main" >
        <div className="txt">
          <span className="spanOne">S</span>
          <span className="spanTwo">horten/<span className="spanThree">url</span></span>
        </div>
        {!status ?
          (<>
            <input type="input" className="input" value={this.state.data}  placeholder="example.xyz" onChange={this.userInput} />
            <button className={this.state.btnTxt==="Fetching..." ? "btn-f" : "btn"} onClick={this.ShortMe} disabled={this.state.disable}>{this.state.btnTxt}</button>
          </>)
          :
          (<>
            <input type="input" className="input" value={api_data.short_link} onChange={this.userInput} />
            <button className="btn" onClick={this.copyMe}>Copy URL</button>
          </>)
        }
        <br />
        <span className="copied">{this.state.msg}</span>
        {/* <span>{api_data.short_link}</span> */}
      </div>

    )
  }
}