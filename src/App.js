import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1> TRẦN HỮU DẠT </h1>
        <iframe title="PHÁT_HIỆN_BẤT_THƯỜNG_KPI_VÀ_PAKH" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=ad8bc228-3f29-4668-add7-2e651ae0d9ad&autoAuth=true&ctid=4854ea43-d6dd-42d7-a25f-c0e8d0663795" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    )
  }
}

export default App
