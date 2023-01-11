import useAxios from 'axios-hooks'
import { useState, useEffect } from "react";
const URL = 'http://localhost:3000/tasks/';
export default function AxiosDelete () {
    const [{ data: getData, loading: getLoading, error: getError }, refetch] = useAxios(URL)
    const [id, setId] = useState(null);
    const [
        { error: deleteError }, executeDelete
    ] = useAxios({ url: URL + id, method: 'DELETE' }, { manual: true });
    const deleteAction = async () => {
        if (id) {
            await executeDelete();
            setId(null);
        }
        await refetch();
    }
    useEffect(() => {
        deleteAction();
    }, [id])
    if (getLoading) return <p>Loading...</p>
    if (getError || deleteError) return <p>Error!</p>
    return (<div>
        <ul>
            {getData.map((item) => {
                return (
                    <li key={item.id}> {item.taskName}
                        <button onClick={() => setId(item.id)}>delete</button> </li>
                )
            })}
        </ul> </div>
    )
}