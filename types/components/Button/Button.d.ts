import React from "react";
import "./Button.scss";
export interface IQuillButton {
    label: string;
}
declare const QuillButton: (props: IQuillButton) => React.JSX.Element;
export default QuillButton;
