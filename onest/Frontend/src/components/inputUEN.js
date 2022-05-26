import { useState } from 'react';

function InputUEN () {

    const [uen, setUEN] = useState();

    const handleSubmit = async () => {
        console.log('handleSubmit:');
        setUEN(uen);
    };

    const handleInput = () => {
        setUEN();
    };

    function validateUEN(value) {
        let isUen = /((S|T)([a-zA-Z0-9]{9})|([0-3])(\d{8})([A-Z]))/g;
        if (value && !isUen.test(value)) {
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