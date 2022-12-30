import axios from 'axios';

export const fetchPosts = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/fetch_posts`);
        return { posts: data };
    } catch (err) {
        return {
            posts: { err },
        };
    }
};
