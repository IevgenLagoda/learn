import React from 'react';
import PropTypes from 'prop-types';

DataFetcher.propTypes = {
  url: PropTypes.string,
};

DataFetcher.defaultProps = {
    url: null,
};

// Get data from the given url and display it in a list of Task[].
function TaskList({tasks}) {
    const taskItems = tasks.map((task, index) => {
        const key = task.id != null ? task.id : `task-${index}`;
        return (
            <li key={key}>
                <input type="checkbox" checked={task.completed} readOnly />
                {task.title}
            </li>
        );
    });
    return (
        <ul className="taskList">{taskItems}</ul>
    );
}

function DataFetcher({url}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        if (!url) {
            setData(null);
            setError(null);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setError(null);
                const list = Array.isArray(data) ? data.slice(0, 10) : [data];
                setData(list);
            })
            .catch(error => {
                setError(error);
                setData(null);
            })
            .then(() => {
                setIsLoading(false);
            });
    }, [url]);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error! {error.message}</div>}
            {data && <TaskList tasks={Array.isArray(data) ? data : [data]} />}
        </>
    );
}

export default DataFetcher;