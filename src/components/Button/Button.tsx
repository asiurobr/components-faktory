import React from "react";
import QuillIcon from "../Icon/Icon";
import "./Button.css";

export interface IQuillButton {
    label: string;
    type: QuillButtonType,
    size: QuillButtonSize,
    buttonAsText?: boolean,
    disabled?: boolean,
    setIcon?: {
        position: 'left' | 'right',
        icon: string;
    }
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
    const asText = props.buttonAsText ? `quill-button__${type}-as-text` : '';
    const classes = `
        quill-button 
        ${ asText } 
        quill-button__${type} 
        quill-button__${size} 
    `;
    let content;
    if( props.setIcon ) {
        content = props.setIcon.position === 'left' ?
        [<QuillIcon icon={props.setIcon.icon}/>, ' ', props.label] :
        [props.label, ' ', <QuillIcon icon={props.setIcon.icon}/>]
    } else {
        content = props.label
    }
    return (
        <>
        <button  
            disabled={!!props.disabled} 
            className={classes}>
                { content }
        </button>
        </>
    )
};

export default QuillButton;

// Borrar fort awesome