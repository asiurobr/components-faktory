import React from "react";
import "./Button.scss";

export interface IQuillButton {
    label: string;
}

const QuillButton = ( props: IQuillButton ) => {
    return (
        <button>{ props.label }</button>
    )
};

export default QuillButton;