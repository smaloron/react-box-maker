import useToggle from '../hooks/useToggle';
export default function TestUseToggle () {
    const [active, setActive] = useToggle(true);

    return (
        <button onClick={() => setActive()}>
            {active ? 'désactiver' : 'activer'}
        </button>
    )

}