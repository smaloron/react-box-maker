import React, { useState, useEffect } from "react";
export default function UseEffectFetch () {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://swapi.dev/api/people/3/`);
            const newData = await response.json();
            setCharacter(newData);
        };
        fetchData();
    }, []);
    const getCharacter = () => {
        return character ? <h1>{character.name}</h1> : <h1>Aucun personnage</h1>;
    }
    return (
        <div>
            {getCharacter()}
        </div>);
}