import React from "react";

export interface QuillButton {
    label: string;
}

const QuillButton = ( props: QuillButton ) => {
    return (
        <button>{ props.label }</button>
    )
};

export default QuillButton;