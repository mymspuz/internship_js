async function getUsers(names) {
    const requests = [];

    const BASE_URL = 'https://api.github.com/';

    names.forEach(name => {
        const request = fetch(`${BASE_URL}users/${name}`)
            .then(response => response.status === 200 ? response.json() : null)
            .catch(error => null)
        requests.push(request);
    });

    return await Promise.all(requests);
}

const users = getUsers(['iliakan', 'remy', 'no.such.users'])
console.log(users)