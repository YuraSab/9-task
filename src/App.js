import React, {memo, useCallback, useMemo, useState} from 'react';


const Test = memo(({cartSum, onClick}) => {
    console.log("Test");


    return (
        <h3 onClick={() => onClick(Math.random())}>
            Test shows cartSum: {cartSum.val}
        </h3>
    );
}, );


function App() {


    const [counter, setCounter] = useState(0);

    // const arr = [21, 56, 77, 93, 1, 7, 92, 11];

    const [arr, setArr] = useState([21, 56, 77, 93, 1, 7, 92, 11]);


    const cartSum = useMemo(
        () => ({val: arr.reduce((acc, el) => (acc + el), 0)}),
        []
    );

    // const cartSum = ({val: arr.reduce((acc, el) => (acc + el), 0)});

    const onClickTest = useCallback((num) => {
        console.log(num)
    }, [arr])

    return (
        <div>
            {/*<h3 onClick={() => setCounter((prev) => prev+1)}>*/}
            <h3 onClick={() => setArr((prev) => [...prev, Math.random()])}>
                Counter: {counter}
            </h3>
            <Test cartSum={cartSum} onClick={onClickTest}/>
        </div>
    );
}

export default App;