import React from "react";
import useAxios from "axios-hooks";
const URL = 'https://jsonplaceholder.typicode.com/posts';
export default function AxiosGet () {
    const [{ data, loading, error }] = useAxios(URL);
    if (loading) return <p>En cours de chargement...</p>;
    if (error) return <p>Erreur !</p>;
    return <div>{
        data.map(post => {
            return (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            )
        })
    }</div>;
}