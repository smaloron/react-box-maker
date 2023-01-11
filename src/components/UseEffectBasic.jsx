import React, { useEffect, useState } from 'react';
function UseEffectBasic () {
    const [message, setMessage] = useState('Hello world');
    useEffect(() => {
        setTimeout(() => {
            setMessage(message + ' from me');
        }, 1000);

        console.log('useEffect')
    }, []);
    return (
        <h1>{message}</h1>
    )
}
export default UseEffectBasic;