import React from 'react';
import Button from "../../common/Button/Button";


function Footer() {
    return (
        <div className="todoList-footer">
            <Button text={'All'} type={'danger'}/>
            <Button text={'Completed'} type={'info'}/>
            <Button text={'Active'} type={'success'}/>
        </div>
    )
}
export default Footer;
