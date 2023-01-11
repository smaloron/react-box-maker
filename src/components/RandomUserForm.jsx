import { useState } from 'react';
export default function RandomUserForm (props) {
    const [formData, setFormData] = useState({
        gender: 'female', nat: 'es', results: 5
    });

    function changeHandler (ev) {
        const newData = { ...formData };
        newData[ev.target.name] = ev.target.value;
        setFormData(newData);
    }

    function getKey () {
        return Object.entries(formData)
            .filter(item => item[0] != 'key')
            .map(item => item[1])
            .join('');
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        formData.key = getKey();
        props.search(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="gender"
                value={formData.gender} onChange={changeHandler}>
                <option value="female">Féminin</option>
                <option value="male">Masculin</option>
            </select>
            <select name="nat"
                value={formData.nat} onChange={changeHandler} >
                <option value="fr">France</option>
                <option value="dk">Danemark</option>
                <option value="de">Allemagne</option>
                <option value="es">Espagne</option>
                <option value="ei">Irlande</option>
            </select>
            <input type="number"
                name="results" value={formData.results}
                onChange={changeHandler} />
            <button>Valider</button>
        </form>
    )
}