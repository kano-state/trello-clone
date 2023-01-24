import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { useState } from "react";


export const TaskCard = () => {
  const[inputText, setInputText] = useState("");
  const[taskList, setTaskList] = useState([]);
  // const texts = collection(db,"text");
  // console.log(texts)
  


  return (
    <div className='taskCard'>
        <TaskCardTitle />
        <TaskCardDeleteButton />
        <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList}/>
        {/* {texts.map((text) =>( */}
        <Tasks 
        // text={text}
        inputText={inputText} 
        taskList={taskList} 
        setTaskList={setTaskList}/>
        {/* ))} */}
    </div>
  );
};
