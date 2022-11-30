import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

//function declaration
function App() {
    //полезное что-то
    // обязана вернуть JSX
    console.log('App rendering')
    let [ratingValue, setRatingValue]=useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            {/*<Accordion titleValue={'False'} collapsed={false}/>*/}
            <UncontrolledRating/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*<div>Article 1</div>*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'}/>*/}
            {/*<Accordion titleValue={'Users'}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;