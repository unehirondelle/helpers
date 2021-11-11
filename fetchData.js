import fetch from 'node-fetch';

const fetchData = (endpoint, token, options) => {
    const optionsToUse = !options ? {headers: {'authorization': `Bearer ${token}`}} : {
        ...options,
        headers: {...options.headers, 'authorization': `Bearer ${token}`}
    };

    return fetch(`${process.env.REACT_APP_FETCH_URL}/${endpoint}`, optionsToUse)
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(err => console.error(`${endpoint}`, err));
};

export default fetchData;
