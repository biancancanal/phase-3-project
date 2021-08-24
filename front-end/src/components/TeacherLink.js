import React from 'react'
import { Link } from 'react-router-dom'

export const TeacherLink = ({teacher}) => {    
    return (
        <div>
            <Link to={`/teachers/${teacher.id}`}>
                <h3>{teacher.name}</h3>
            </Link>
        </div>
    )
}

export default TeacherLink;