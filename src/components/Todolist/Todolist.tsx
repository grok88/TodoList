import Header from './Header/Header';

import Footer from './Footer/Footer';
import React from 'react';
import styles from './Todolist.module.css';
import {TaskType} from "../../App";
import List from "./List/List";

type propsType = {
    tasks: Array<TaskType>,
    title: string
}

const Todolist = (props: propsType) => {
    return (
        <div className={styles.todolist}>
            <Header title={props.title}/>
            <List tasks={props.tasks}/>
            <Footer/>
        </div>
    );
}

export default  Todolist;
