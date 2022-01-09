import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        console.log(">>");
        super(props);
        this.state = {
            invalid: false,
            status: false,
            msg: false,
            data: '',
            pop: '',
            api_data: [],
        }
        // this.press = this.press.bind(this);
        // this.userInput = this.userInput.bind(this);
    }

    //getting data from localstorage

    componentDidMount() {
        console.log("did ");
        const link = JSON.parse(localStorage.getItem("links")) || [];
        if (link.length > 0) {
            console.log(link.length);
            console.log(link);
            const ar = []
            link.map((val) => {
                val.check = false
                ar.push(val)
                console.log(ar);
            })
            this.setState({ api_data: ar })
        }
    }

    //fetching 

    ShortMe = (p) => {
        p.preventDefault();
        this.setState({ disable: true })
        if (this.state.data.length === 0 || this.state.data.trim().length === 0) {
            this.setState({ pop: "empty", msg: true, data: "" })
        }
        else {
            // this.setState({ btnTxt: "Fetching..." })
            fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.data}`)
                .then(res => res.json())
                .then((resp) => {
                    if (!resp.ok) { throw Error(resp.error), this.setState({ msg: true, pop: "err", data: "" }) }
                    else {
                        this.setState({
                            status: true,
                            api_data: [...this.state.api_data, {
                                s_link: resp.result.short_link,
                                o_link: resp.result.original_link,
                                check: false,
                                id: new Date().getTime()
                            }],
                            data: "",
                        })
                    }
                })
                .catch(e => {
                    this.setState({ status: false })
                    console.log(e);
                })
        }
    }

    //storing in local storage

    componentDidUpdate() {
        console.log(">>didUpdate");
        localStorage.setItem("links", JSON.stringify(this.state.api_data));
    }

    //read user input

    userInput = (e) => {
        this.setState({
            data: e.target.value,
            status: false,
            invalid: false,
            msg: false,
            pop: ''
        })
    }

    // copy to clipboard 

    copyMe = (link, i, id) => {
        console.log(link, i);
        navigator.clipboard.writeText(link)
        const newdata = this.state.api_data.map((data) => data.id === id ? { ...data, check: true } : data);
        this.setState({ api_data: newdata })

    }
    render() {
        return (
            <>
                <div className="hero">
                    <div className="hero-grid">
                        <form onSubmit={this.ShortMe}>
                            <input type="text" placeholder="hello" className={!this.state.msg ? "form-input" : "form_err"} value={this.state.data} placeholder="Shorten a link here..." onChange={this.userInput} />
                            <input type="submit" className="form-btn" onClick={this.ShortMe} value="Shorten It!" />
                        </form>
                        {this.state.msg ? (<>
                            {this.state.pop === "err" ? (<span className="form-spn">Please enter valid link</span>) : (<span className="form-spn">Please add a link</span>)}</>) : (<></>)}
                    </div>
                    {this.state.api_data.map((link, i) => {
                        return (<>
                            {/* <span className="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span> */}
                            <div key={i} className="links">
                                <span className="o-link">{link.o_link}</span>
                                <span className="s-link"><a href={'https:' + link.s_link} target="_blank">{link.s_link}</a></span>
                                <input type="button" className={!link.check ? "c-btn" : "cc-btn"} onClick={() => this.copyMe(link.s_link, i, link.id)} value={!link.check ? "Copy" : "Copied"} />
                            </div>
                        </>
                        )
                    })}
                </div>
            </>
        )
    }
}
