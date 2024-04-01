import React, { useState } from 'react';

function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(null);

    // Rastgele bir sayı üreten fonksiyon
    const generateRandomNumber = () => {
        const min = 1;
        const max = 1000;
        console.log(Math.random())

        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    return (
        <div>
            <div>Random number: {randomNumber}</div>
            <div>
                <button onClick={generateRandomNumber}>Generate random number</button>

            </div>
        </div>
    );
}

export default RandomNumberGenerator;
