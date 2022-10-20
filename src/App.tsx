import React from 'react';
import './App.css';

//function declaration
function App() {
    //полезное что-то
    // обязана вернуть JSX
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

export default App;

function Rating() {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendering')
    return <div>
        <div>star</div>
    </div>
}

function Accordion() {
    console.log('Accordion rendering')
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}