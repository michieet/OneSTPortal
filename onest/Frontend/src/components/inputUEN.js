import { useState } from 'react';

function InputUEN () {

    const [uen, setUEN] = useState();

    const handleSubmit = async () => {
        console.log('handleSubmit:');
        setUEN(uen);
    };

    const handleInput = (e) => {
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
            <form onSubmit={handleSubmit}>
                <input
                className='inputField'
                type='text'
                placeholder='Enter your UEN number'
                value={uen}
                onChange={handleInput}
                />
                <button
                className='button'
                onClick={validateUEN}
                >Submit</button>
            </form>
        </div>
    )
};

export default InputUEN;