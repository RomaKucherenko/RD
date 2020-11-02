import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import MainApp from "./App";



//Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов,
// которые можно менять.
ReactDOM.render(<MainApp/>,document.getElementById('root'))

serviceWorker.unregister();
