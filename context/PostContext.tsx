import { createContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { fetchGithub } from '../utils/fetch_github';

interface Props {
    children?: React.ReactChild;
}

interface Post {
    post: {
        id: number;
        category: string[];
    };
}

export interface PostContextReturn {
    posts: {};
    addingPosts: (object: []) => void;
    retrieveCategory?: any;
    selectCategory: (arg0: string) => void;
    selectedCategory: string;
    chosenPostFunction: (id: string | string[] | undefined) => void;
    chosenPost: string | number | string[] | undefined;
    postSelected: {};
    openedPost: boolean;
    setGithubInfo: React.Dispatch<React.SetStateAction<undefined>>;
    githubInfo: any;
}

export const PostContext = createContext<PostContextReturn>({} as PostContextReturn);

export const PostContextProvider: React.FC<Props> = ({ children }: Props) => {
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [githubInfo, setGithubInfo] = useState();
    const [chosenPost, setChosenPost] = useState<number | string | string[] | undefined>();
    const router = useRouter();
    const openedPost = !!router.query.posts;

    const addingPosts = (postsObject: []) => {
        setPosts(postsObject);
    };

    useEffect(() => {
        if (!githubInfo) {
            (async () => {
                const { data } = await fetchGithub();
                console.log(data);
                setGithubInfo(data);
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const chosenPostFunction = (id: string | string[] | undefined) => {
        setChosenPost(Number(id));
    };

    const retrieveCategory = () => {
        if (!Object.values(posts)) return null;

        try {
            return posts?.reduce((a, { category }) => [...a, ...category], []);
        } catch (err) {
            console.log(err);
        }
    };

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <PostContext.Provider
            value={{
                posts: _.map(posts, (post: Post['post']) => {
                    if (!post.category) return [];
                    const checkIfInArray = post?.category.some(e => e.toLowerCase() === selectedCategory.toLowerCase());
                    if (!selectedCategory) return post;

                    return checkIfInArray ? post : [];
                }),
                postSelected: _.map(posts, (post: Post['post']) => {
                    const checkPost = chosenPost && chosenPost === post.id;
                    return checkPost && post;
                }),
                addingPosts,
                retrieveCategory,
                selectCategory,
                selectedCategory,
                chosenPostFunction,
                chosenPost,
                openedPost,
                setGithubInfo,
                githubInfo,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};
