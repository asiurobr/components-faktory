import React from "react";
import "./Button.css";
export interface IQuillButton {
    label: string;
    type: QuillButtonType;
    size: QuillButtonSize;
    buttonAsText?: boolean;
    disabled?: boolean;
    setIcon?: {
        position: 'left' | 'right';
        icon: string;
    };
}
export declare enum QuillButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
export declare enum QuillButtonSize {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small"
}
declare const QuillButton: (props: IQuillButton) => React.JSX.Element;
export default QuillButton;
