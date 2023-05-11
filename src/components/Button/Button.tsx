import React from "react";
import "./Button.scss";

export interface IQuillButton {
    label: string;
    type: QuillButtonType,
    size: QuillButtonSize,
    disabled?: boolean
}

export enum QuillButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary'
}

export enum QuillButtonSize {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small'
}

const QuillButton = ( props: IQuillButton ) => {
    const type = props.type ? props.type : 'primary';
    const size = props.size ? props.size : 'large';
    const classes = `quill-button quill-button__${type} quill-button__${size}`;
    return (
        <button  
            disabled={!!props.disabled} 
            className={classes}>
                { props.label }
            </button>
    )
};

export default QuillButton;