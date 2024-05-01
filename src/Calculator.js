import {useState} from 'react';


function Calculator() {

    const [result, setResult]     = useState(0);
    const [modifier, setModifier] = useState(null);
    const [operator, setOperator] = useState(null);

    function add(e) {
        setResult((result) => Number(result) + Number(modifier));
    }

    function subtract(e) {
        setResult((result) => result - modifier);
    }

    function multiply(e) {
        setResult((result) => result * modifier);
    }

    function divide(e) {
        setResult((result) => result / modifier);
    }

    function reset(e) {
        e.preventDefault();
        setResult(0);
        setModifier(0);
    }

    function performOperation() {
        setModifier(Number(modifier));

        switch (operator) {
            case 'add':
                add();
                break;
            case 'subtract':
                subtract();
                break;
            case 'multiply':
                multiply();
                break;
            case 'divide':
                divide();
                break;
            default:
                if (!!modifier) {
                    setResult(modifier);
                }
                break;
        }

        setOperator(null);
        setModifier(0);
    }

    function clickNumber(number, e) {
        e.preventDefault();
        setModifier((!!modifier ? modifier.toString() : '') + number.toString());
    }

    function clickOperator(op, e) {
        // If there is any math to be done, otherwise do nothing
        if (!!modifier || !!result) {
            performOperation();
        }

        setOperator(op);
    }

    function clickDot(e) {
        e.preventDefault();

        // Only concat a dot if there isn't one already in the string
        if (!modifier.includes('.')) {
            setModifier((!!modifier ? modifier.toString() : '') + '.');
        }
    }

    function changeSign(e) {
        e.preventDefault();
        setModifier(-modifier);
    }

    function finishOperation(e) {
        e.preventDefault();

        performOperation();

        wrongulate();
    }

    function wrongulate() {
        let randomOperator = Math.random();
        let randomNumber = Math.floor(Math.random() * 10) + 1;

        if (randomOperator <= 0.25) {
            setResult(result + randomNumber);
        } else if (randomOperator <= 0.5) {
            setResult(result - randomNumber);
        } else if (randomOperator <= 0.75) {
            setResult(result * randomNumber);
        } else {
            setResult(result / randomNumber);
        }
    }

    return (
        <div id="calculator">
            <p id="result">{ !!modifier ? modifier : result }</p>
            <div className="button-row">
                <button onClick={reset}>AC</button>
                <button onClick={changeSign}>±</button>
                <button>%</button>
                <button onClick={(e) => clickOperator('divide', e)}>÷</button>
            </div>
            <div className="button-row">
                <button onClick={(e) => clickNumber(7, e)}>7</button>
                <button onClick={(e) => clickNumber(8, e)}>8</button>
                <button onClick={(e) => clickNumber(9, e)}>9</button>
                <button onClick={(e) => clickOperator('multiply', e)}>×</button>
            </div>
            <div className="button-row">
                <button onClick={(e) => clickNumber(4, e)}>4</button>
                <button onClick={(e) => clickNumber(5, e)}>5</button>
                <button onClick={(e) => clickNumber(6, e)}>6</button>
                <button onClick={(e) => clickOperator('subtract', e)}>–</button>
            </div>
            <div className="button-row">
                <button onClick={(e) => clickNumber(1, e)}>1</button>
                <button onClick={(e) => clickNumber(2, e)}>2</button>
                <button onClick={(e) => clickNumber(3, e)}>3</button>
                <button onClick={(e) => clickOperator('add', e)}>+</button>
            </div>
            <div className="button-row">
                <button id="zero" onClick={(e) => clickNumber(0, e)}>0</button>
                <button onClick={(e) => clickDot(e)}>.</button>
                <button onClick={finishOperation}>=</button>
            </div>
        </div>
    );
}

export default Calculator;