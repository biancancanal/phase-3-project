import React, { Component } from 'react'

class TeacherForm extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addATeacher(this.state) //where is the teacher? in state
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default TeacherForm;