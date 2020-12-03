export default async function getExternalApiPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
}

export async function getAllPostsIds() {
    const data = await getExternalApiPosts()
    return data.map(post => {
        return { params: { id: post.id.toString() } }
    })
}

export async function getPostData(id) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post.json()
}