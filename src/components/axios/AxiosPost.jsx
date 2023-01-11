import React from "react";
import useAxios from "axios-hooks";

const URL = 'https://jsonplaceholder.typicode.com/todos';
export default function AxiosPost () {
    const [{ data, loading, error }, executePost] = useAxios(
        { url: URL, method: 'POST' },
        { manual: true });
    const newTodo = { userId: 1, title: 'Acheter des piles', completed: false };
    const addTask = () => {
        executePost({ data: newTodo });
    }
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    return (
        <div>
            <button onClick={addTask}>Ajouter</button>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}