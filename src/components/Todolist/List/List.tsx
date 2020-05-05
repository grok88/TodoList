import React from 'react';
import styles from './List.module.css';
import {Task} from "./Task/Task";
import {TaskType} from "../../../App";

type propsType = {
    tasks: Array<TaskType>
}

function List(props : propsType) {
    const {tasks} = props;

    const jsxElements = tasks.map(item => <Task isDone={item.isDone} title={item.title} key={item.id}/>);

    console.log(props)
    return (
        <div className={styles.list}>
            {jsxElements}
        </div>
    )
}

export default List;


