import styles from "./Task.module.css";
import React from "react";
import classNames from "classnames/bind";

type TaskType = {
    isDone: boolean,
    title: string
}

export const Task = (props: TaskType) => {
    const css = classNames({
        [styles.task]: true,
        [styles.done]: props.isDone
    });

    return (
        <div className={css}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    );
}