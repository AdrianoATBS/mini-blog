export async function getCommentsByPostId(postId: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    if(!response.ok) {
        throw new Error('Erro ao buscar comentários');
    }   
    return response.json();
}