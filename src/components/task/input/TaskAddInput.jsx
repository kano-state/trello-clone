import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import db from '../../../firebase';

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
  }) => {
const handleSubmit = (e) => {
  // const taskId = uuid();
  e.preventDefault();
addDoc(collection(db,"text"),{
text: inputText
})

  if(inputText === ""){
    return;
  }
  //カードを追加する
  setTaskList([...taskList,
    {
      draggableId: `task-${taskList.Length}`,
      id: taskList.length,
      text: inputText,
    },
    ]);
    setInputText("");
};

const handleChange = (e) => {
setInputText(e.target.value);
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder='add a task'
         className='taskAddInput'
         onChange={(handleChange)}
         value={inputText}
          />
      </form>
    </div>
  )
}
