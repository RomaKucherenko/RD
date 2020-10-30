import React from "react"
import ReactDOM from"react-dom"
import MainApp from "./App";

test('render app without crashing', () => {
  const div = document.createElement(`div`)
  ReactDOM.render(<MainApp/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
