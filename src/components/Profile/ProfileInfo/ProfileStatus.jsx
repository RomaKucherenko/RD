import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    onChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps != this.props) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {this.state.editMode ?
                <input onChange={this.onChange} autoFocus={true}
                       onBlur={this.deactivateEditMode}
                       value={this.state.status}/>
                :
                <span onClick={this.activateEditMode}>
                    {this.props.status ? this.props.status: "````"}
                </span>}
        </div>
    }
}

export default ProfileStatus