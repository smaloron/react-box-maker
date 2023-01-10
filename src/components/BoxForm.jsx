import { useState } from 'react'
export default function BoxForm (props) {
    const [formData, setFormData] = useState({
        height: '', width: '', color: ''
    });

    function handleChange (ev) {
        const newState = { ...formData };
        newState[ev.target.name] = ev.target.value;
        setFormData(newState);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        props.newBox(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="number"
                    name="width"
                    placeholder="la largeur"
                    value={formData.width}
                    onChange={handleChange} />
                <input
                    type="number"
                    name="height"
                    placeholder="la hauteur"
                    value={formData.height}
                    onChange={handleChange} />
                <input
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange} />
            </div>
            <button>Valider</button>
        </form>
    )
}