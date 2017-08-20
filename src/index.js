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
    description: "which will be work",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "jeden",
        done: true
      },
      {
        id: 2,
        name: "dwa",
        done: false
      },
      {
        id: 3,
        name: "trzy",
        done: false
      }
    ]
  },
];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
registerServiceWorker();