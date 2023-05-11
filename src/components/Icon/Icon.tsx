import React from "react";

export interface IQuillIcon {
    icon: string;
}

const QuillIcon = ( props: IQuillIcon ) => {
    const iconClass = `fa-solid fa-${ props.icon }`
    return (
        <i className={ iconClass }></i>
    )
}

export default QuillIcon;