import styles from './App.module.css';
import Todolist from './components/Todolist/Todolist';
import React from 'react';
import {v1} from 'uuid';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

function App() {

    const tasks1 : Array<TaskType> = [
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Patterns", isDone: true},
    ];

    const tasks2 : Array<TaskType> = [
        {id: v1(), title: "Bike", isDone: true},
        {id: v1(), title: "Bread", isDone: true},
        {id: v1(), title: "Car", isDone: false},
    ];

    const tasks3 : Array<TaskType> = [
        {id: v1(), title: "обиду", isDone: true},
        {id: v1(), title: "злость", isDone: true},
        {id: v1(), title: "долг родине", isDone: false},
    ];

    return (
        <div className={styles.App}>
            <Todolist tasks={tasks1} title={'What to Learn'}/>
            <Todolist tasks={tasks2} title={'What to buy'}/>
            <Todolist tasks={tasks3} title={'What to forget'}/>
        </div>
    );
}

export default App;
