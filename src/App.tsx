import React from 'react';
import './App.css';

//function declaration
function App() {
    debugger
    //полезное что-то
    // обязана вернуть JSX
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

function Rating() {
    debugger
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}

function Accordion() {
    debugger
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}