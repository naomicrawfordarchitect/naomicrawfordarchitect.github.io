import React from 'react';
import ReactDOM from 'react-dom';
import Extensions from "./modules/Extensions";


document.addEventListener(
    "DOMContentLoaded",
    () => {
        ReactDOM.render(
            <div>
                <Extensions />
            </div>,
            document.getElementById('app')
        );
    }
);
