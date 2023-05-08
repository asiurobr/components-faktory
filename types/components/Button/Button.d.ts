import React from "react";
export interface IButton {
    label: string;
}
declare const Button: (props: IButton) => React.JSX.Element;
export default Button;
