//otpInputs.js
import React, {useState} from "react";
import Styles from './Otp.css'; //remove this line if you are using react

//Our parent component
const Otp = () => {
    //state to store all input boxes    
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        // Add more input values here
    });
    //this function updates the value of the state inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };
    //this function processes form submission
    const handleSubmit = () => {
        // ... Your submit logic here
    };
    //return child component
    console.log(inputValues.input1 +inputValues.input2 +inputValues.input3 +inputValues.input4 +inputValues.input5 +inputValues.input6 );
        return (
        <>
        
            <div  className='container' data-autosubmit="true">
                <OTPInput
                    id="input1"
                    value={inputValues.input1}
                    onValueChange={handleInputChange}
                    previousId={null}
                    handleSubmit={handleSubmit}
                    nextId="input2"
                    // className="input"
                />
                <OTPInput
                    id="input2"
                    value={inputValues.input2}
                    onValueChange={handleInputChange}
                    previousId="input1"
                    handleSubmit={handleSubmit}
                    nextId="input3"
                    // className="input"
                />
                <OTPInput
                    id="input3"
                    value={inputValues.input3}
                    onValueChange={handleInputChange}
                    previousId="input2"
                    handleSubmit={handleSubmit}
                    nextId="input4"
                    // className="input"
                />
               
                <OTPInput
                    id="input4"
                    value={inputValues.input4}
                    onValueChange={handleInputChange}
                    previousId="input3"
                    handleSubmit={handleSubmit}
                    nextId="input5"
                    // className="input"
                />
                <OTPInput
                    id="input5"
                    value={inputValues.input5}
                    onValueChange={handleInputChange}
                    previousId="input4"
                    handleSubmit={handleSubmit}
                    nextId="input6"
                    // className="input"
                />
                <OTPInput
                    id="input6"
                    value={inputValues.input6}
                    onValueChange={handleInputChange}
                    previousId="input5"
                    handleSubmit={handleSubmit}
                    // className="input"
                />
            </div>
        </>
    );
}

//Our child component
const OTPInput = ({ id, previousId, nextId, value, onValueChange, handleSubmit }) => {
    //This callback function only runs when a key is released
    const handleKeyUp = (e) => {
        //check if key is backspace or arrowleft
        if (e.keyCode === 8 || e.keyCode === 37) {
            //find the previous element
            const prev = document.getElementById(previousId);
            if (prev) {
                //select the previous element
                prev.select();
            }
        } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) || //check if key is numeric keys 0 to 9
            (e.keyCode >= 65 && e.keyCode <= 90) || //check if key is alphabetical keys A to Z
            (e.keyCode >= 96 && e.keyCode <= 105) || //check if key is numeric keypad keys 0 to 9
            e.keyCode === 39 //check if key is right arrow key
        ) {
            //find the next element
            const next = document.getElementById(nextId);
            if (next) {
                //select the next element
                next.select();
            } else {
                //check if inputGroup has autoSubmit enabled
                const inputGroup = document.getElementById('OTPInputGroup');
                if (inputGroup && inputGroup.dataset['autosubmit']) {
                    //submit the form
                    handleSubmit();
                }
            }
        }
    }
    return (
  
        <input
            id={id}
            className='input'
            name={id}
            type="text"
            // className={Styles.DigitInput}
            value={value}
            maxLength="1"
            onChange={(e) => onValueChange(id, e.target.value)}
            onKeyUp={handleKeyUp}
        />
    );
};

export default Otp;