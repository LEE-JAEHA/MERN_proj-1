import React,{useState} from "react";


const NewGoal = props => {
    const [text_input,setText_input]= useState("");


    const addGoalHandler = event =>{
        // console.log("test")
        event.preventDefault();
        const inputGoal ={
            id : Math.random().toString(),
            text : text_input
        };
        setText_input("");
        props.add(inputGoal);
        // onAddGoal의 인수로 newGoal 전달
    };

    const textChangedHandler = event =>{
        // text_input = event.target.value;
        setText_input(event.target.value);
    };


    return (<form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={text_input} onChange={textChangedHandler}></input>

        {/* 
            input 요소에 값이 변경되지 않는다면 rendering하지 않음
            react 입장에서 Text_input은 항상 빈 문자열
            NewGoal 컴포넌트를 마지막으로 렌더링했을 때 비어있기 때문
         */}
        <button type = "submit" onClick={addGoalHandler}>Add Goal</button>
    </form>);
};

export default NewGoal;