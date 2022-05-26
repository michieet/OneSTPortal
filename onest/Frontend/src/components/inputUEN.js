import { useState } from 'react';

export default function InputUEN () {

    const [uen, setUEN] = useState();

    const handleSubmit = async () => {
        console.log('handleSubmit:');
        setUEN();
    };

    const handleInput = () => {
        setUEN();
    };

    function validateUEN(value) {
        let isUen = /((S|T)([a-zA-Z0-9]{9})|([0-3])(\d{8})([A-Z]))/g;
        if (value && !isUen.test(value)) {
            // alert("Please enter a valid UEN");
            setUEN(()=>false);           
        } else {
            setUEN(()=>true);
            alert("This is a valid UEN");
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
                onChange={handleInput}
                />
                <button
                className='button'
                onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
    )
};
