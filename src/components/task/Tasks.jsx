import React from 'react'
import { Task } from './Task';
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    //タスクを並び替える
    const remove = taskList.splice(result.source.index,1);
    taskList.splice(result.destination.index,0,remove[0]);
  };
return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
             {taskList.map((task) => (
             <div key={task.id}>
              <Task task={task} taskList={taskList} setTaskList={setTaskList}/>
              </div>
              ))}
              {provided.placeholder}
          </div>)}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
