import axios from 'axios'

export default async (res, req) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data

    return res.json(posts.slice(0,10))
}