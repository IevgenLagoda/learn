import React from 'react';

function DataFetcher({url}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        console.log(url);
        url && setIsLoading(true);
        url && fetch(url)
            .then(response => {
                const resp = response.json();
                return resp
            })
            .then(data => {
                setIsLoading(false);
                setError(null);
                setData(data);                
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
                setData(null);
            });
    }, [url]);

    <div>Url: '{url}'</div>
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error! {error.message}</div>
    if (data) return <div>{JSON.stringify(data)}</div>
    
}

export default DataFetcher;