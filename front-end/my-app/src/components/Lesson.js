import React, { useState } from "react";
import LessonEdit from "../containers/LessonEdit";

const Lesson = (props) => {
    const [lessonEditFlag, setLessonEditFlag] = useState(false)


    return (
    <div>
        <h4> {props.lesson.name} </h4>
        {lessonEditFlag ? <LessonEdit lesson={props.lesson}/> : <button onClick={() => setLessonEditFlag(true)}></button>}
    </div>
    )
}

export default Lesson;