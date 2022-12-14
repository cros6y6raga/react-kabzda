import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            {/*<button onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            {/*<button onClick={() => setValue(2)}>2</button>*/}
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            {/*<button onClick={() => setValue(3)}>3</button>*/}
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            {/*<button onClick={() => setValue(4)}>4</button>*/}
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
            {/*<button onClick={() => setValue(5)}>5</button>*/}
            {/*<Star selected={value > 5} setValue={setValue} value={1}/>*/}
            {/*<button onClick={() => setValue(6)}>6</button>*/}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue:()=>void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={()=>{props.setValue()}}>
        {props.selected ? <b>star </b> : 'star '}</span>
}