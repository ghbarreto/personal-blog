export const fetchGithub = async () => {
    let data, err;
    await fetch(`http://localhost:3030/api/profile`, {
        method: 'GET',
    })
        .then(async res => {
            const retrievedData = await res.json();
            return (data = retrievedData);
        })
        .catch(error => {
            return (err = error);
        });

    return { data, err };
};
