export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
    }
    return response.json();
}

export async function getUserById(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar usuário');
        }
        return response.json();
}