import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';

export const Input = ({setContent}) => {

    const editor = useRef(null);

    const config = {
        readonly: false
    }

    return (
        <JoditEditor
            ref={editor}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => {}}
        />
    )
}
