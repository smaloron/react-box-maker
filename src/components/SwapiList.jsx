import { useEffect, useState } from 'react';

export default function SwapiList () {
    const [characterList, setCharList] = useState(null);
    const [nextLink, setNextLink] = useState(null);
    const [prevLink, setPrevLink] = useState(null);

    const BASEURL = 'https://swapi.dev/api/people/';

    const [url, setUrl] = useState(BASEURL);

    useEffect(() => {
        async function fetchList (url) {
            const response = await fetch(url);
            const data = await response.json();

            setNextLink(data.next);
            setPrevLink(data.previous);
            setCharList(data.results);
        }

        fetchList(url);
    }, [url]);

    function getCharacterList () {
        if (characterList) {
            return characterList.map((user) => <li key={user.url}>{user.name}</li>);
        } else {
            <p>Chargement en cours</p>
        }
    }

    return (
        <div>
            <ul>{getCharacterList()}</ul>
            {prevLink ? <button onClick={() => setUrl(prevLink)}>Précédent</button> : ''}
            {nextLink ? <button onClick={() => setUrl(nextLink)}>Suivant</button> : ''}
        </div>
    )
}