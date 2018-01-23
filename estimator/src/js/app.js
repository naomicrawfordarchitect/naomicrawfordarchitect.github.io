import React from 'react';
import ReactDOM from 'react-dom';
import Filter from "./modules/Filter";
import movies from "./modules/movies";


document.addEventListener(
    "DOMContentLoaded",
    () => {
        ReactDOM.render(
            <div>
                <Filter items={ movies } />
            </div>,
            document.getElementById('app')
        );
    }
);
