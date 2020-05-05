import React from "react";
import styles from './Button.module.css';
import classNames from "classnames/bind";

type PropsType = {
    text: string;
    type?: 'default' | 'danger' | 'info' | 'success'
}

const Button = (props: PropsType) => {
    const {type, text} = props;

    let resultCss = classNames({
        [styles.button]: true,
        [styles.danger]: type === 'danger',
        [styles.info]: type === 'info',
        [styles.success]: type === 'success'
    });

    return (
        <input type="button" value={text} className={resultCss}/>
    );
}

export default Button;
