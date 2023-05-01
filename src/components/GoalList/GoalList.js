import React from 'react';
import "./GoalList.css"
const GoalList = props =>{
    console.log(props.goals)
    return (
        <ul className='goal-list'>
            {props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
            })}
            {/* <li>Finish the course</li>
            <li>Learn all about the course main</li>
            <li>Help other students in Q&amp;A</li> */}
        </ul>
    );
};


export default GoalList;