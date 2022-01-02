import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';

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
}

export const PostContext = createContext<PostContextReturn>(
  {} as PostContextReturn
);

export const PostContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [chosenPost, setChosenPost] = useState<
    number | string | string[] | undefined
  >();

  const addingPosts = (postsObject: []) => {
    return setPosts(postsObject);
  };

  const chosenPostFunction = (id: string | string[] | undefined) => {
    return setChosenPost(Number(id));
  };

  const retrieveCategory = () => {
    if (Object.keys(posts).length < 1) return null;
    return posts.reduce((a, { category }) => [...a, ...category], []);
  };
  const selectCategory = (category: string) => {
    return setSelectedCategory(category);
  };

  return (
    <PostContext.Provider
      value={{
        posts: _.map(posts, (post: Post['post']) => {
          const checkIfInArray = post.category.some(
            e => e.toLowerCase() === selectedCategory.toLowerCase()
          );
          if (!selectedCategory) return post;

          return checkIfInArray ? post : [];
        }),
        postSelected: _.map(posts, (post: Post['post']) => {
          const checkPost = chosenPost && chosenPost === post.id
          return checkPost && post;
        }),
        addingPosts,
        retrieveCategory,
        selectCategory,
        selectedCategory,
        chosenPostFunction,
        chosenPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
