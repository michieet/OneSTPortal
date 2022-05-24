// import axios from 'axios';
import { useState } from 'react';

function InputUEN () {

    const [uen, setUEN] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUEN();
    };

    function validateUEN() {
        let uen = document.forms['form']['fname'].value;
        if (uen === "") {
            alert("UEN form must be filled");
            return false;
        }
    };

    return (
        <div>
            <form onSubmit={validateUEN}>
                <input
                className='inputField'
                type='text'
                placeholder='Enter your UEN number'
                value={uen}
                // onChange={}
                />
                <button
                className='button'
                onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
    )
};

export default InputUEN;