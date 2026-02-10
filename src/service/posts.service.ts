export function getPosts()
{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching posts:', error);
            throw error;
        });

}

export async function getPostById(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    return response.json();
}