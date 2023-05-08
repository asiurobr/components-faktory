import React from "react";

export interface IButton {
    label: string;
}

const Button = ( props: IButton ) => {
    return (
        <button>{ props.label }</button>
    )
};

export default Button;