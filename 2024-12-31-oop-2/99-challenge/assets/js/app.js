(async () => {
    const getUser = async (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
    };
    try {
        console.log(await Promise.all([1, 2, 3].map(userId => getUser(userId))));
    }
    catch (e) {
        console.log(e);
    }
})();
