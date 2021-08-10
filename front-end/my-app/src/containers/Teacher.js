import React, {useState, useEffect} from 'react'
import Lesson from '../components/Lesson'
import LessonForm from './LessonForm'

export const Teacher = (props) => {
    const [teacher, setTeacher] = useState({
        lessons: []
    })
    
    const [lessonFormFlag, setLessonFormFlag] = useState(false)

    useEffect(() => {        
    fetch(`http://localhost:9292/teachers/${props.match.params.id}`)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setTeacher(data)
        })
    }, [props.match.params.id])

    const addLesson = (lesson) => {
        console.log(lesson)
    }

    const lessons = teacher.lessons.map( x => <Lesson key={x.id} lesson={x}/>)

    return (
        <div>
            <h1>{teacher.name}</h1>
            <h2> Biography </h2>
            <h2> Lessons </h2>
            {lessons}
            {lessonFormFlag ? <LessonForm addALesson={addLesson} teacher={teacher}/> : <button onClick={()=> setLessonFormFlag(true)}>New Lesson</button>}
        </div>
    )
}

export default Teacher;