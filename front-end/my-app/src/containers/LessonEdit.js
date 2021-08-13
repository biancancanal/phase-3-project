import React, { Component } from 'react'

class LessonEdit extends Component {
    state = {
        id: null,
        name: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addADog(this.state)
    }

    render() {
        return (
            <div>
                <form onSunmit={this.handleSubmit}>
                    <label>Class: </label> <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>    
            </div>
        )
    }
}

export default LessonEdit