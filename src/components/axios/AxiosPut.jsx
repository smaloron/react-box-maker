import useAxios from 'axios-hooks'
const URL = 'https://jsonplaceholder.typicode.com/todos/1';
export default function AxiosPut () {
    const [{ data: getData, loading: getLoading, error: getError }] = useAxios(URL)
    const [
        { data: putData, loading: putLoading, error: putError }, executePut
    ] = useAxios({ url: URL, method: 'PUT' }, { manual: true });
    function updateData () {
        executePut({
            data: {
                ...getData,
                updatedAt: new Date().toISOString(),
                completed: true
            }
        })
    };
    if (getLoading || putLoading) return <p>Loading...</p>
    if (getError || putError) return <p>Error!</p>
    return (
        <div>
            <button onClick={updateData}>update data</button>
            <pre>{JSON.stringify(putData || getData, null, 2)}</pre>
        </div>
    )
}