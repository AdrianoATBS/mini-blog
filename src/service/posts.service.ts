export async function getPosts()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Erro ao buscar postagens');
    }
    return response.json();

}

export async function getPostById(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar postagem');
    }
    return response.json();
}