import React, { Component } from 'react'

class LessonEdit extends Component {
    state = {
        id: this.props.lesson.id,
        name: ''
    }
    
    componenetDidMount() {
        this.state({
            id: this.props.lesson.id,
            name: this.props.lesson.name
        })
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editLesson(this.state)
        this.props.toggleForm(e)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Class </label> <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>    
            </div>
        )
    }
}

export default LessonEdit