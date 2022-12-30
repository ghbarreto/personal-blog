import axios from 'axios';
import { fetchGithub } from './fetch_github';
import { fetchPosts } from './fetch_posts';

export const initProps = async () => {
    const { posts } = await fetchPosts();
    return {
        value: posts,
    };
};
