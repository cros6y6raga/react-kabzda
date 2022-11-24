import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }
    return <>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={onClickHandler}>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </>
}

// export function Accordion2(props: AccordionPropsType) {
//     console.log('Accordion rendering')
//     if (props.collapsed === true) {
//         return <>
//             {true}
//             {false}
//             {1} {'sdsds'}
//             <AccordionTitle title={props.titleValue}/>
//         </>
//     } else {
//         return <>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </>
//     }
//
// }

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <div>
        <h3>{props.title}</h3>
    </div>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}