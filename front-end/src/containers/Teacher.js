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
        fetch(`http://localhost:9292/teachers/${teacher.id}/lessons`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
         })
         .then(r => r.json())
         .then(data => {
             console.log(data)
            setTeacher ({
                ...teacher,
                lessons: [...teacher.lessons, data ]
            })
          })
          setLessonFormFlag(false)
        }

    const deleteLesson = (id) => {
        fetch(`http://localhost:9292/lessons/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }, 
         })
         .then(() => {
             
             setTeacher({
                 ...teacher,
                 lessons: teacher.lessons.filter(l => l.id !==id)

             })
        })
    }

    const editLesson = (lesson) => {
        fetch(`http://localhost:9292/lessons/${lesson.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(lesson)
         })

         .then(()=> {
            //const newLessons = teacher.lessons.filter(l => l.id lesson.id) 
            console.log(lesson)
            setTeacher({
                 ...teacher,
                 [lesson.id]: lesson //update lesson 
         })
         console.log(lesson)
    })
}

    const lessons = teacher.lessons.map( l => <Lesson key={l.id} lesson={l} editLesson={editLesson} deleteLesson={deleteLesson}/>)

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