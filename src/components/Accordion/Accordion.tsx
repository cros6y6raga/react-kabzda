import React from "react";

export function Accordion(props:any) {
    console.log('Accordion rendering')
    return <>
        <AccordionTitle title={props.title}/>
        <AccordionBody title={props.title}/>
    </>
}

function AccordionTitle(props:any) {
    console.log('AccordionTitle rendering')
    return <div>
        <h3>{props.title}</h3>
    </div>
}

function AccordionBody(props:any) {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            {props.title}
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}