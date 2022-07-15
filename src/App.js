import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Test = () => {

    // const storeCounter = useSelector((state) => {
    //     console.log(state);
    //     return state.counter;
    // });

    // const storeCounter = useSelector(({counter}) => counter);

    const counter = useSelector(({counter}) => counter);

    const dispatch = useDispatch();

    const handleInc = () => dispatch({type: "INC_COUNTER"});

    const handleDec = () => dispatch({type: "DEC_COUNTER"});

    const handleReset = () => dispatch({type: "RESET_COUNTER"});


    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};

export default function App() {

    // const storeCounter = useSelector((state) => {
    //     return state.counter
    // });

    // const [counter, setCounter]= useState(0);

    const counter = useSelector(({counter}) => counter);

    return (
        <div>
            <h3>Counter: {counter}</h3>
            {/*<h3>Counter: {counter}</h3>*/}
            <Test title='test'/>
        </div>
    );
};