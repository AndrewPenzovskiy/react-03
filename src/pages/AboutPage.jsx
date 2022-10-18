import React, {useState} from 'react';
import TestCC from "../components/TestCC";

const AboutPage = ()=> {
    let [count, setCount] = useState(20)

    const countHandler = ()=> {
        count = count + 5
        setCount(count)
    }
    console.log('HomePage render')

    return (
        <div className={'page-item'}>
            <button onClick={countHandler}>click</button>
            <TestCC />
        </div>
    );
}

export default AboutPage;