import { useEffect, useState } from 'react';

function useData(fetchData) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData().then((result) => {
            setData(result);
            setLoading(false);
        });
    }, [fetchData]);

    return {data, loading};
}