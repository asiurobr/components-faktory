/// <reference types="react" />
import { QuillButtonSize, QuillButtonType } from './Button';
declare const _default: {
    component: (props: import("./Button").IQuillButton) => import("react").JSX.Element;
};
export default _default;
export declare const Primary: {
    args: {
        label: string;
        type: QuillButtonType;
        disabled: boolean;
        size: QuillButtonSize;
        buttonAsText: boolean;
        setIcon: {
            icon: string;
            position: string;
        };
    };
};
