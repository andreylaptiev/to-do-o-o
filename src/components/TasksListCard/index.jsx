import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.cardColor || '#f5f5f5'};
  box-sizing: border-box;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 170px;
  height: 300px;
  padding: 25px 0 25px 20px;

  &:hover {
    &::before {
      content: '';
      background-color: #fff;
      opacity: 0.2;
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const CardTasks = styled.div`
  font-family: 'OpenSans-Bold', sans-serif;
  font-size: 1.4rem;
  text-align: start;
  width: 100%;
`;

const CardTitle = styled.h3`
  border-bottom: 1px solid #c4c4c4;
  font-size: 2rem;
  padding-bottom: 20px;
  text-align: start;
  width: 100%;
`;

const ListItem = styled.li`
  padding-inline-start: 1ch;
  line-height: 2em;

  &::marker {
    content: '‣';
  }
`;

const Task = styled.p`
  color: ${props => props.isDone ? '#d5d8dc' : '#fff'};
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
  font-family: 'OpenSans-Medium';
`;

const TasksListCard = ({ taskList }) => {
  // check title length to fit in card
  const title = taskList.title.length > 11
    ? (taskList.title.slice(0, 11) + '...')
    : taskList.title;

  // check tasks quantity to fit in card (only 7 pieces)
  let tasks = taskList.tasks;
  if (tasks.length > 7) {
    tasks = tasks.slice(0, 7);
    tasks[6].name = '...';
  }

  // check task name length to fit in card
  for (let t of tasks) {
    if (t.name.length > 14) {
      t.name = t.name.slice(0, 14) + '...';
    }
  }

  return (
    <Card cardColor={taskList.cardColor}>
      <CardTitle>{title}</CardTitle>
      <CardTasks>
        <ul>
          {tasks.map(task =>
            <ListItem key={task.id}>
              <Task isDone={task.isDone}>{task.name}</Task>
            </ListItem>
          )}
        </ul>
      </CardTasks>
    </Card>
  );
}

export default TasksListCard;
