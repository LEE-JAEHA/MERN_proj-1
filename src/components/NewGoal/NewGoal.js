import React from "react";


const NewGoal = props => {
    const addGoalHandler = event =>{
        // console.log("test")
        event.preventDefault();
        const inputGoal ={
            id : Math.random().toString(),
            text : "My New goal"
        }
        props.add(inputGoal);
        // onAddGoal의 인수로 newGoal 전달
    };


    return (<form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text"></input>
        <button type = "submit" onClick={addGoalHandler}>Add Goal</button>
    </form>);
};

export default NewGoal;