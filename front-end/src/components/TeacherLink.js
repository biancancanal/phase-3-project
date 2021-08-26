import React from 'react'
import { Link } from 'react-router-dom'

export const TeacherLink = (props) => {    
    return (
        <div>
            <Link to={`/teachers/${props.teacher.id}`}>
                <h3>{props.teacher.name}</h3>
            </Link>
            <button onClick={() => props.deleteTeacher(props.teacher.id)}>x</button>
        </div>
    )
}

export default TeacherLink;