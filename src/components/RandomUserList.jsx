import { useState, useEffect } from 'react';
import axios from 'axios';
export default function RandomUserList (props) {
    const [userList, setUserList] = useState([]);
    const BASEURL = 'https://randomuser.me/api?';

    function getUrl () {
        let search = [];
        for (let key in props) {
            search.push(`${key}=${props[key]}`)
        }

        return BASEURL + search.join('&');
    }

    useEffect(() => {
        async function fetchUsers () {
            const { data } = await axios.get(getUrl());
            setUserList(data.results);
        }

        fetchUsers();
    }, []);

    function getOneUser (user) {
        return (
            <tr>
                <td>
                    <img src={user.picture.large} />
                </td>
                <td>
                    {user.name.first} {user.name.last}
                </td>
                <td>
                    {user.location.street.number}&nbsp;
                    {user.location.street.name} <br />
                    {user.location.postcode}&nbsp;
                    {user.location.city} <br />
                    {user.location.country}
                </td>
            </tr>
        )
    }

    function getUserRows () {
        return userList.map((user) => getOneUser(user));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Nom</th>
                    <th>Adresse</th>
                </tr>
            </thead>
            <tbody>
                {getUserRows()}
            </tbody>
        </table>
    )

}