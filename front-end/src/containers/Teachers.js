import { ID } from 'postcss-selector-parser'
import React, {useState, useEffect} from 'react'
import TeacherLink from '../components/TeacherLink'
import TeacherForm from './TeacherForm'


export const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [teacherFormFlag, setTeacherFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/teachers')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setTeachers(data)
        })
    }, [])

    const toggleAddTeacherForm = (e) => { //actually set True 
        console.log(e.target)
        setTeacherFormFlag(true)
    }

    const addTeacher = (teacher) => {
        //inform backend, change state, toggle form
        fetch(`http://localhost:9292/teachers/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
         })
         .then(r => r.json()) 
         .then(data => {
            console.log(teacher)
            console.log(data)
            console.log(teachers)
            console.log(setTeachers)
            setTeachers([...teachers, data])
          })
          console.log(teacher)
          setTeacherFormFlag(false)
        }


    const deleteTeacher = (id) => {
        fetch(`http://localhost:9292/teachers/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }, 
         })
         .then(() => {
             setTeachers(teachers.filter(t => t.id !==id))
        })
    }

    const teachersList = teachers.map(t => <TeacherLink key={t.id} teacher={t} deleteTeacher={deleteTeacher}/>)

    return (
        <div>
            <h1> List of Teachers </h1>
            <ul>
                {teachersList}
            </ul>
            {teacherFormFlag ? <TeacherForm addATeacher={addTeacher}/> : <button onClick={toggleAddTeacherForm}>New Teacher</button>}
        </div>
    )
}

export default Teachers;