import React from 'react';
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

type HeaderType = {
    title : string
}

function Header(props : HeaderType) {
    return <div className="todoList-header">
        <h3 className="todoList-header__title">{props.title}</h3>
        <div className="todoList-newTaskForm">
            <Input placeholder={'new title'}/>
            <Button text = {"Add"} />
        </div>
    </div>
}

export default Header
