import React,{useState} from 'react';
import "./App.css"
import GoalList from './components/GoalList/GoalList';
import NewGoal from "./components/NewGoal/NewGoal";
const App = () => {
  const [goalList,setGoalList]= useState([
    {id: "cg1", text : "Finish the Course"},
    {id: "cg2", text : "Learn all about the course main"},
    {id: "cg3", text : "Help other students in Q&amp;A"},
  ]);
  // useState는 2개의 값을 반환함
  // 하나는 해당 값 다른 하나는 값을 변환하는 함수


  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    // setGoalList(goalList.concat(newGoal)); // Delay가 발생할 수 있음
    // setGoalList((prev)=>{
    //   return prev.concat(newGoal);
    // }); // 상태 데이터가 완전히 바뀌면 상관이 없지만
    // 이렇게 계속 업데이트 되면 이 방법이 더 효과적
    setGoalList((prev)=> prev.concat(newGoal)); // 중괄호 없는 문법
  }

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal add = {addNewGoalHandler}/>
      {/* 데이터를 받을 때 
          - 함수 포인터를 NewGoal 컴포넌트에 전달
          - addNewGoalHandler를 NewGoal로 전달
          - NewGoal.add는 함수 포인터로
          - addNewGoalHandler를 가리킴
          - NewGoal.js로 가면 NewGoal.add(newGoal)
          - add 가 addNewGoalHandler를 가리키고
          - 얘에 inputGoal 데이터를 넣어 호출함
       */}
      <GoalList goals = {goalList}/>
      {/* 데이터를 줄 때 */}
  </div>
  );
};

export default App;
