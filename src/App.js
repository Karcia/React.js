import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import logo from './logo.svg';
import './App.css';

let cardsList = [
  {
    id: 1,
    title: "Read book",
    description: "i need to read whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "write some code",
    description: "its your imagination",
    status: "to-do",
    tasks: [
      {
        id: 1,
        name: "sample of contact list",
        done: true
      },
      {
        id: 2,
        name: "kanban sample",
        done: false
      },
      {
        id: 3,
        name: "my exp",
        done: false
      }
    ]
  }, 
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));