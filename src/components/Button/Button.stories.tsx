import QuillButton, { QuillButtonSize, QuillButtonType } from './Button'

export default { component: QuillButton }
export const Primary = { args: { 
        label: 'Button',
        type: QuillButtonType.PRIMARY,
        disabled: false,
        size: QuillButtonSize.LARGE,
        buttonAsText: false,
        setIcon: {
            icon: 'user',
            position: 'right'
        },
        onClick: ( e: any ) => console.log( e )
    }
}
