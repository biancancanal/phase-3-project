import React, { useState } from "react";
import LessonEdit from "../containers/LessonEdit";
import Teacher from "../containers/Teacher";

const Lesson = (props) => {
    const [lessonEditFlag, setLessonEditFlag] = useState(false)


    return (
    <div>
        <h4> {props.lesson.name} </h4>
        {lessonEditFlag ? <LessonEdit lesson={props.lesson.id} toggleForm={() => setLessonEditFlag(false)} editLesson={props.editLesson}/> : <button onClick={() => setLessonEditFlag(true)}>Edit</button>}
        <button onClick={() => props.deleteLesson(props.lesson.id)}>Delete</button>
    </div>
    )
}

export default Lesson;