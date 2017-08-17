import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanbanBoard from './KanbanBoard';
import registerServiceWorker from './registerServiceWorker';

let cardsList = [
  {
    id: 1,
    title: "read book",
    description: "description",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "write some code",
    description: "description",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "name",
        done: true
      },
      {
        id: 2,
        name: "name",
        done: false
      },
      {
        id: 3,
        name: "name",
        done: false
      }
    ]
  },
];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
registerServiceWorker();