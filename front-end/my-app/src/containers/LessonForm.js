import React,  { Component } from 'react'

 class LessonForm extends Component {
    state = {
        lesson: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addALesson(this.state) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Lesson: </label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default LessonForm