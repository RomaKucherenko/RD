import React from "react";

class News extends React.Component {
    state = {
        stateNewsElements: this.props.news.map(n => <span>{n}</span>)
    }
    propsNewsElements = this.props.news.map(n => <span>{n}</span>)
    changeState = () => {
        this.setState({
            stateNewsElements: [...this.state.stateNewsElements, "changeLocalState"]
        })
    }
    changeBLL = () => {
        this.props.addNews("ChangeBll")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props != prevProps){
            console.log(this.props)
            this.setState({
                stateNewsElements: this.props.news.map(n => <span>{n}</span>)
            })
        }
    }

    render() {
        console.log(`render`)
        return <div>
            State:
            {this.state.stateNewsElements}
            <br/>
            Props:
            {this.propsNewsElements}
            <div>
                <button onClick={this.changeBLL}>Change BLL</button>
                <button onClick={this.changeState}>Change LocalState</button>
            </div>
        </div>
    }
}

export default News
