import { useEffect, useState } from 'react';
import axios from 'axios'

/// カスタムHook
const useFetch = (url) => {
    /// useState
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setErrors] = useState(null);

    const db = axios.create({baseURL: url});
    const fetchData = async() => await db.get('');

    useEffect(() => {
        fetchData()
        .then((response) => {
            setData(response.data);
        })
        .catch(error => setErrors(error));
        setIsPending(false);
        console.log(data);
        console.log(isPending)
        console.log(error)
    }, []);

    return {data, isPending, error};
}

export default useFetch;