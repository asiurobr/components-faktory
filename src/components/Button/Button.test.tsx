import React from "react";

import { render } from '@testing-library/react'
import QuillButton from "./Button";

describe('QuillButton', () => {
    test('renders the QuillButton component', () => {
        render( <QuillButton label="Hola mundo" /> )
    })
})