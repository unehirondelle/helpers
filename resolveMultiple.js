const resolveMultiple = async (endpoints, token, options) => {
    const urls = endpoints.map(e => `${process.env.REACT_APP_FETCH_URL}/${e}`);

    const optionsToUse = !options ? {headers: {'authorization': `Bearer ${token}`}} : {
        ...options,
        headers: {...options.headers, 'authorization': `Bearer ${token}`}
    };

    try {
        const data = await Promise.all(urls.map(url => fetch(url, optionsToUse)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    console.info(`resolveMultiple res resolved`);
                    return json;
                } else {
                    console.warning(`resolveMultiple res NOT resolved`);
                    return [];
                }
            })
            .catch(err => {
                console.error(`resolveMultiple: ${err}`);
                return [];
            })
        ));
        return (data);
    } catch (err) {
        console.error(`resolveMultiple: ${err}`);
        throw (err);
    }
};

export default resolveMultiple;
