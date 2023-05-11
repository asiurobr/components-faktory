import React from "react";

import { render } from '@testing-library/react'
import QuillButton, { QuillButtonSize, QuillButtonType } from "./Button";

describe('QuillButton', () => {
    test('renders the QuillButton component', () => {
        render( 
        <QuillButton 
            label="Hola mundo" 
            type={ QuillButtonType.PRIMARY } 
            disabled={false}
            size={ QuillButtonSize.LARGE }
        /> )
    })
})