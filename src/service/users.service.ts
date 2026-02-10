export function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching users:', error);
            throw error;
        });
}

export function getUserById(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}