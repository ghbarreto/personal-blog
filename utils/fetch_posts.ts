import axios from 'axios';

export const fetchPosts = async () => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_WEBSITE}/api/fetch_posts`);
        return { posts: data };
    } catch (err) {
        return {
            posts: { err },
        };
    }
};
